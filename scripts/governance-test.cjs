const hre = require("hardhat");
const path = require('node:path');
const { system, patching, filesystem } = require('gluegun');
const { createApolloFetch } = require('apollo-fetch');
const { ethers } = require('hardhat');
const srcDir = path.join(__dirname, '..');
const { abi } = require('../artifacts/contracts/Window.sol/Window.json');

const fetchSubgraphs = createApolloFetch({ uri: 'http://localhost:8030/graphql' });
const fetchSubgraph = createApolloFetch({
  uri: 'http://localhost:8000/subgraphs/name/AionCoreSubgraph',
});

const waitForSubgraphToBeSynced = async () =>
  new Promise((resolve, reject) => {
    const deadline = Date.now() + 10 * 1000;

    const checkSubgraphSynced = async () => {
      if (Date.now() > deadline) {
        reject('Timeout while waiting for the subgraph to be synced');
      }

      const result = await fetchSubgraphs({
        query: `
          {
            statuses: indexingStatusesForSubgraphName(
              subgraphName: "AionCoreSubgraph"
            ) {
              synced
            }
          }
          `,
      });

      if (result.data.statuses[0].synced) {
        setTimeout(resolve, 1000);
      } else {
        setTimeout(checkSubgraphSynced, 500);
      }
    };

    setTimeout(checkSubgraphSynced, 0);
  });

async function deployMockAggregator() {
  const Aggregator = await hre.ethers.getContractFactory("MockAggregator");
  const aggregator = await Aggregator.deploy();
  await aggregator.waitForDeployment();
  return aggregator;
}

async function deployMockDataFeed(decimals, initialPrice, aggregatorAddress) {
  const DataFeed = await hre.ethers.getContractFactory("MockAggregatorV3Interface");
  const dataFeed = await DataFeed.deploy(decimals, initialPrice, aggregatorAddress);
  await dataFeed.waitForDeployment();
  return dataFeed;
}

async function approveAsset(governor, window, dataFeedAddress, name, symbol, collateralFactor, liquidationFactor) {
  const approveAssetCalldata = window.interface.encodeFunctionData("approveAsset", [dataFeedAddress, name, symbol, collateralFactor, liquidationFactor]);
  const description = `Approve ${name} asset`;
  const windowAddress = await window.getAddress();
  const proposeTx = await governor.propose([windowAddress], [0], [approveAssetCalldata], description);
  const receipt = await proposeTx.wait();
  let proposalCreatedEvents = receipt.logs.filter((event) => event.fragment.name == "ProposalCreated");
  const proposalId = proposalCreatedEvents[0].args[0];
  console.log('Proposal ID: ', proposalId);

  // Fast forward past the voting delay
  const votingDelay = await governor.votingDelay();
  console.log(`Voting delay: ${votingDelay}`);
  
  await hre.network.provider.send("evm_increaseTime", [Number(votingDelay)]);
  await hre.network.provider.send("evm_mine");

  // Cast vote
  await governor.castVote(proposalId, 1);
  await hre.network.provider.send("evm_mine");

  // Fast forward past the voting period
  const votingPeriod = await governor.votingPeriod();
  console.log(`Voting period: ${votingPeriod}`);

  await hre.network.provider.send("evm_increaseTime", [Number(votingPeriod)]);
  await hre.network.provider.send("evm_mine");

  // Queue proposal
  const descriptionHash = ethers.keccak256(ethers.toUtf8Bytes(description));
  await governor.queue([windowAddress], [0], [approveAssetCalldata], descriptionHash);
  await hre.network.provider.send("evm_increaseTime", [3600]); // Fast forward time to allow proposal to be executed
  await hre.network.provider.send("evm_mine");

  // Execute proposal (Timelock will execute the function on Window contract)
  const executeTx = await governor.execute([windowAddress], [0], [approveAssetCalldata], descriptionHash);
  const executeReceipt = await executeTx.wait();

  // Create the interface from the ABI
  const windowInterface = new ethers.Interface(abi);

  // Decode the event using the contract interface
  const decodedEvent = windowInterface.parseLog(executeReceipt.logs[1]);

  return decodedEvent.args[0];
}

async function issueLoan(window, assetAddress, etherAmount) {
  const options = { value: ethers.parseEther(etherAmount) };
  const tx = await window.issue(assetAddress, options);
  const result = await tx.wait();
  
  return {
    loanAddress: result.logs[3].args[0],
    amountIssued: result.logs[3].args[4]
  };
}

async function liquidate(loan, asset, amount) {
  const tx = await asset.approve(loan.address, amount);
  const result = await tx.wait();

  const tx2 = await loan.liquidate(amount);
  const result2 = await tx2.wait();
}

async function simulatePriceChange(dataFeeds, symbol, newPrice) {
  const dataFeed = dataFeeds[symbol];
  const tx = await dataFeed.updateAnswer(newPrice);
  await tx.wait();
  console.log(`Price for ${symbol} updated to ${newPrice}`);
}

async function main() {
  try {
    const precision = BigInt(4);
    const borrowingRatio = BigInt(15000);
    const liquidatorFee = BigInt(200);
    const daoFee = BigInt(300);
    const collectorFee = BigInt(100);
    const decimals = BigInt(8);
    const initialEthPrice = BigInt(250000000000);

    const [owner] = await hre.ethers.getSigners();

    const ethDataAgg = await deployMockAggregator();
    console.log(`Mock ETH Aggregator deployed to: ${await ethDataAgg.getAddress()}`);

    const ethDataFeed = await deployMockDataFeed(decimals, initialEthPrice, await ethDataAgg.getAddress());
    console.log(`Mock ETH Data Feed deployed to: ${await ethDataFeed.getAddress()}`);

    // Deploy the Timelock contract
    const Timelock = await hre.ethers.getContractFactory("AionicTimelock");
    const timelock = await Timelock.deploy(1, [owner.address], [owner.address], owner.address);
    await timelock.waitForDeployment();
    console.log(`Timelock deployed to: ${await timelock.getAddress()}`);

    // Deploy the Token contract
    const Token = await hre.ethers.getContractFactory("Aion");
    const token = await Token.deploy();
    await token.waitForDeployment();
    console.log(`Token deployed to: ${await token.getAddress()}`);

    // Delegate votes to owner
    const delegateTx = await token.connect(owner).delegate(owner.address);
    await delegateTx.wait();
    console.log(`Delegated votes to owner.`);

    // Deploy the Governor contract
    const Governor = await hre.ethers.getContractFactory("AionicDAO");
    const governor = await Governor.deploy(token.getAddress(), timelock.getAddress());
    await governor.waitForDeployment();
    console.log(`Governor deployed to: ${await governor.getAddress()}`);

    // Grant the Governor contract the Proposer role in the Timelock
    const proposerRole = await timelock.PROPOSER_ROLE();
    const executorRole = await timelock.EXECUTOR_ROLE();

    // Check if the governor already has the proposer role
    const hasProposerRole = await timelock.hasRole(proposerRole, governor.getAddress());
    console.log(`Governor has proposer role: ${hasProposerRole}`);

    if (!hasProposerRole) {
      const grantProposerTx = await timelock.grantRole(proposerRole, governor.getAddress());
      await grantProposerTx.wait();
      console.log(`Proposer role granted to Governor: ${await timelock.hasRole(proposerRole, governor.getAddress())}`);
    }

    // Check if the owner has the executor role
    let hasExecutorRole = await timelock.hasRole(executorRole, owner.address);
    console.log(`Owner has executor role: ${hasExecutorRole}`);

    if (!hasExecutorRole) {
      const grantExecutorTx = await timelock.grantRole(executorRole, owner.address);
      await grantExecutorTx.wait();
      console.log(`Executor role granted to owner: ${await timelock.hasRole(executorRole, owner.address)}`);
    }

    // Check if the governor has the executor role
    hasExecutorRole = await timelock.hasRole(executorRole, governor.getAddress());
    console.log(`Governor has executor role: ${hasExecutorRole}`);

    if (!hasExecutorRole) {
      const grantExecutorTx = await timelock.grantRole(executorRole, governor.getAddress());
      await grantExecutorTx.wait();
      console.log(`Executor role granted to governor: ${await timelock.hasRole(executorRole, governor.getAddress())}`);
    }

    const Window = await hre.ethers.getContractFactory("Window");
    const window = await Window.deploy(
      timelock.getAddress(),
      precision,
      borrowingRatio,
      collectorFee,
      daoFee,
      liquidatorFee,
      ethDataFeed.getAddress()
    );

    await window.waitForDeployment();
    console.log(`Window deployed to: ${await window.getAddress()}`);

    const currentOwner = await window.owner();
    console.log(`Current owner of Window contract: ${currentOwner}`);
    console.log(`Timelock address: ${await timelock.getAddress()}`);

    if (currentOwner !== await timelock.getAddress()) {
        const transferOwnershipTx = await window.transferOwnership(timelock.getAddress());
        await transferOwnershipTx.wait();
        console.log(`Transferred ownership of Window to Timelock: ${timelock.getAddress()}`);
    }

    filesystem.copy('template-subgraph.yaml', 'subgraph.yaml', { overwrite: true });
    await patching.replace(
      path.join(srcDir, 'subgraph.yaml'),
      'DEPLOYED_CONTRACT_ADDRESS',
      await window.getAddress(),
    );

    const assets = [
      { name: "AionicUSD", symbol: "AUSD", collateralFactor: 2000, liquidationFactor: 12500, etherAmount: "1.0", initialPrice: BigInt(20000000000) },
      { name: "AionicEURO", symbol: "AEURO", collateralFactor: 3000, liquidationFactor: 12000, etherAmount: ".5", initialPrice: BigInt(15000000000) },
      { name: "AionicYEN", symbol: "AJYN", collateralFactor: 4000, liquidationFactor: 11000, etherAmount: ".5", initialPrice: BigInt(18000000000) },
      { name: "AionicGPB", symbol: "AGPB", collateralFactor: 5000, liquidationFactor: 13000, etherAmount: ".5", initialPrice: BigInt(22000000000) },
      { name: "AionicCNY", symbol: "ACNY", collateralFactor: 4000, liquidationFactor: 11000, etherAmount: ".5", initialPrice: BigInt(21000000000) },
    ];

    const loanAddresses = [];
    const assetAddresses = {};
    const dataFeeds = {};

    for (const asset of assets) {
      const assetDataAgg = await deployMockAggregator();
      console.log(`Mock ${asset.name} Aggregator deployed to: ${await assetDataAgg.getAddress()}`);

      const assetDataFeed = await deployMockDataFeed(decimals, asset.initialPrice, await assetDataAgg.getAddress());
      const assetDataFeedAddress = await assetDataFeed.getAddress();
      console.log(`Mock ${asset.name} Data Feed deployed to: ${assetDataFeedAddress}`);

      dataFeeds[asset.symbol] = assetDataFeed;

      const assetAddress = await approveAsset(governor, window, assetDataFeedAddress, asset.name, asset.symbol, asset.collateralFactor, asset.liquidationFactor);
      console.log(`Asset Address: ${assetAddress}`);

      assetAddresses[asset.symbol] = assetAddress;

      const loan = await issueLoan(window, assetAddress, asset.etherAmount);
      console.log(`Loan Address: ${loan.loanAddress}`);
      console.log(`Amount Asset Issued: ${loan.amountIssued} ${asset.symbol}`);

      loanAddresses.push(loan.loanAddress);
    }

    console.log("Loan Addresses:", loanAddresses);

    const Loan = await hre.ethers.getContractFactory("Loan");
    const loan1 = Loan.attach(loanAddresses[0]);
    await loan1.collect();

    const loan2 = Loan.attach(loanAddresses[1]);
    await loan2.collect();

    // Simulate price changes
    await simulatePriceChange(dataFeeds, "ANVDA", BigInt(25000000000));
    await simulatePriceChange(dataFeeds, "AAMZN", BigInt(20000000000));


    const Asset = await hre.ethers.getContractFactory("Asset");
    const asset1 = Asset.attach(assetAddresses["AAMZN"]);
    
    let asset1Balance = await asset1.balanceOf(owner.address);
    console.log(`Owner balance before: ${ethers.formatUnits(asset1Balance, 8)}`);
    let liabilityAmount = await loan2.liabilityAmount();
    console.log(`Liability Amount balance before: ${ethers.formatUnits(liabilityAmount, 8)}`);
    
    await asset1.approve(loanAddresses[1], ethers.parseEther("1"));
    await loan2.liquidate(ethers.parseEther("1"));
    
    asset1Balance = await asset1.balanceOf(owner.address);
    console.log(`Owner balance after: ${ethers.formatUnits(asset1Balance, 8)}`);
    liabilityAmount = await loan2.liabilityAmount();
    console.log(`Liability Amount balance after: ${ethers.formatUnits(liabilityAmount, 8)}`);

    await system.run(`npm run codegen`, { cwd: srcDir });
    await system.run(`npm run create-test`, { cwd: srcDir });
    await system.run(`npm run deploy-test`, { cwd: srcDir });

    await waitForSubgraphToBeSynced();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();