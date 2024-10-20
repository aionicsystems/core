const hre = require("hardhat");
const path = require('node:path');
const { system, patching, filesystem } = require('gluegun');
const { createApolloFetch } = require('apollo-fetch');
const { ethers } = require('hardhat');
const srcDir = path.join(__dirname, '..');

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

async function approveAsset(window, dataFeedAddress, name, symbol, collateralFactor, liquidationFactor) {
  const tx = await window.approveAsset(dataFeedAddress, name, symbol, collateralFactor, liquidationFactor);
  const result = await tx.wait();
  const assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
  return assetEntityEvents[0].args[0];
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

    const Window = await hre.ethers.getContractFactory("Window");
    const window = await Window.deploy(
      owner.address,
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
      window.target,
    );

    const assets = [
      { name: "Nvidia", symbol: "ANVDA", collateralFactor: 2000, liquidationFactor: 12500, etherAmount: "1.0", initialPrice: BigInt(20000000000) },
      { name: "Amazon", symbol: "AAMZN", collateralFactor: 3000, liquidationFactor: 12000, etherAmount: ".5", initialPrice: BigInt(15000000000) },
      { name: "Apple", symbol: "AAAPL", collateralFactor: 4000, liquidationFactor: 11000, etherAmount: ".5", initialPrice: BigInt(18000000000) },
      { name: "Google", symbol: "AGOOG", collateralFactor: 5000, liquidationFactor: 13000, etherAmount: ".5", initialPrice: BigInt(22000000000) },
      { name: "Microsoft", symbol: "AMCST", collateralFactor: 4000, liquidationFactor: 11000, etherAmount: ".5", initialPrice: BigInt(21000000000) },
      { name: "ConocoPhillips", symbol: "ACOP", collateralFactor: 5000, liquidationFactor: 13000, etherAmount: ".5", initialPrice: BigInt(17000000000) },
      { name: "AMD", symbol: "AAMD", collateralFactor: 5000, liquidationFactor: 13000, etherAmount: ".5", initialPrice: BigInt(16000000000) }
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

      const assetAddress = await approveAsset(window, assetDataFeedAddress, asset.name, asset.symbol, asset.collateralFactor, asset.liquidationFactor);
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
    await simulatePriceChange(dataFeeds, "AAMZN", BigInt(30000000000));


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