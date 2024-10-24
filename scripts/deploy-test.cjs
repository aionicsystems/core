const hre = require("hardhat");
const path = require('node:path');
const { system, patching, filesystem } = require('gluegun');
const { createApolloFetch } = require('apollo-fetch');
const { ethers } = require('hardhat');
const srcDir = path.join(__dirname, '..');

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

    const Timelock = await hre.ethers.getContractFactory("AionicTimelock");
    const timelock = await Timelock.deploy(1, [owner.address], [owner.address], owner.address);
    await timelock.waitForDeployment();
    console.log(`Timelock deployed to: ${await timelock.getAddress()}`);

    const Token = await hre.ethers.getContractFactory("Aion");
    const token = await Token.deploy();
    await token.waitForDeployment();
    console.log(`Token deployed to: ${await token.getAddress()}`);

    const Governor = await hre.ethers.getContractFactory("AionicDAO");
    const governor = await Governor.deploy(token.getAddress(), timelock.getAddress());
    await governor.waitForDeployment();
    console.log(`Governor deployed to: ${await governor.getAddress()}`);

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

    filesystem.copy('template-subgraph.yaml', 'subgraph.yaml', { overwrite: true });
    await patching.replace(
      path.join(srcDir, 'subgraph.yaml'),
      'DEPLOYED_CONTRACT_ADDRESS',
      await window.getAddress(),
    );

    // Test proposal on a simple governance parameter
    const newVotingDelay = 2; // New voting delay to propose
    const setVotingDelayCalldata = governor.interface.encodeFunctionData("setVotingDelay", [newVotingDelay]);
    console.log(`Encoded calldata for setting voting delay: ${setVotingDelayCalldata}`);

    try {
      const testProposalId = await governor.propose([governor.getAddress()], [0], [setVotingDelayCalldata], "Set new voting delay");
      console.log(`Test proposal created with ID: ${testProposalId}`);

      await hre.network.provider.send("evm_mine", []); // Fast forward time to allow voting
      await governor.castVote(testProposalId, 1); // Vote for the proposal
      await hre.network.provider.send("evm_mine", []); // Fast forward time to allow proposal to be queued

      await governor.queue([governor.getAddress()], [0], [setVotingDelayCalldata], ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Set new voting delay")));
      await hre.network.provider.send("evm_mine", []); // Fast forward time to allow proposal to be executed

      await governor.execute([governor.getAddress()], [0], [setVotingDelayCalldata], ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Set new voting delay")));
      console.log("Test proposal executed successfully");
    } catch (error) {
      console.error("Error creating or executing test proposal:", error);
      return;
    }

    const assets = [
      { name: "Nvidia", symbol: "ANVDA", collateralFactor: 2000, liquidationFactor: 12500, etherAmount: "1.0", initialPrice: BigInt(20000000000) },
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

      const approveAssetCalldata = window.interface.encodeFunctionData("approveAsset", [assetDataFeedAddress, asset.name, asset.symbol, asset.collateralFactor, asset.liquidationFactor]);
      console.log(`Encoded calldata for ${asset.name}: ${approveAssetCalldata}`);

      try {
        console.log(`Proposal for ${asset.name} on Window: ${await window.getAddress()}`);
        const proposalId = await governor.propose([window.getAddress()], [0], [approveAssetCalldata], `Approve ${asset.name} asset`);
        console.log(`Proposal for ${asset.name} created with ID: ${proposalId} on Window: ${await window.getAddress()}`);
      } catch (error) {
        console.error(`Error creating proposal for ${asset.name}:`, error);
        continue;
      }

      await hre.network.provider.send("evm_mine", []); // Fast forward time to allow voting
      await governor.castVote(proposalId, 1); // Vote for the proposal
      await hre.network.provider.send("evm_mine", []); // Fast forward time to allow proposal to be queued

      await governor.queue([window.getAddress()], [0], [approveAssetCalldata], ethers.utils.keccak256(ethers.utils.toUtf8Bytes(`Approve ${asset.name} asset`)));
      await hre.network.provider.send("evm_mine", []); // Fast forward time to allow proposal to be executed

      await governor.execute([window.getAddress()], [0], [approveAssetCalldata], ethers.utils.keccak256(ethers.utils.toUtf8Bytes(`Approve ${asset.name} asset`)));
      console.log(`Proposal for ${asset.name} executed`);

      const assetAddress = await window.assets(assetDataFeedAddress);
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

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();