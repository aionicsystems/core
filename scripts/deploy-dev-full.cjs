const hre = require("hardhat");
const path = require('node:path');
const { system, patching, filesystem } = require('gluegun');
const { createApolloFetch } = require('apollo-fetch');
const { ethers } = require('hardhat');
const srcDir = path.join(__dirname, '..');

// Remove node-fetch import if using Node.js v18+
// const fetch = require('node-fetch'); // Remove this line if on Node.js v18+

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

async function deployConstantChainlinkFeed() {
  const ConstantChainlinkFeed = await hre.ethers.getContractFactory("ConstantChainlinkFeed");
  const feed = await ConstantChainlinkFeed.deploy();
  await feed.waitForDeployment();
  return feed;
}

async function approveAsset(windowContract, dataFeedAddress, name, symbol, collateralFactor, liquidationFactor) {
  const tx = await windowContract.approveAsset(dataFeedAddress, name, symbol, collateralFactor, liquidationFactor);
  const result = await tx.wait();
  const assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
  return assetEntityEvents[0].args[0];
}

async function issueLoan(windowContract, assetAddress, etherAmount) {
  const options = { value: ethers.parseEther(etherAmount) };
  const tx = await windowContract.issue(assetAddress, options);
  const result = await tx.wait();

  return {
    loanAddress: result.logs[3].args[0],
    amountIssued: result.logs[3].args[4]
  };
}

async function simulatePriceChange(assetPriceFeeds, symbol, newPrice) {
  const dataFeed = assetPriceFeeds[symbol];
  const tx = await dataFeed.updateAnswer(newPrice);
  await tx.wait();
  console.log(`Price for ${symbol} updated to ${newPrice}`);
}

async function fetchExchangeRate(currencyCode) {
  try {
    // Since Frankfurter API uses EUR as base, we need to adjust accordingly
    let apiUrl;
    if (currencyCode === 'EUR') {
      apiUrl = `https://api.frankfurter.app/latest?from=EUR&to=USD`;
    } else {
      apiUrl = `https://api.frankfurter.app/latest?from=${currencyCode}&to=USD`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(`Response data for ${currencyCode}:`, data);

    if (!data || !data.rates) {
      throw new Error(`Invalid API response for currency ${currencyCode}`);
    }

    const rate = data.rates["USD"];
    return rate;
  } catch (error) {
    console.error(`Failed to fetch exchange rate for ${currencyCode}: ${error.message}`);
    throw error;
  }
}

async function main() {
  try {
    const config = {
      precision: BigInt(4),
      borrowingRatio: BigInt(15000),
      liquidatorFee: BigInt(200),
      daoFee: BigInt(300),
      collectorFee: BigInt(100),
      decimals: BigInt(8),
      initialEthPrice: BigInt(250000000000),
    };

    const currencyMapping = {
      "AEURO": "EUR",
      "AJYN": "JPY",
      "AGPB": "GBP",
      "ACNY": "CNY"
    };

    const assets = [
      { name: "AionicUSD", symbol: "AUSD", collateralFactor: 2000, liquidationFactor: 12500, collateralEtherAmount: "1.0" },
      { name: "AionicEURO", symbol: "AEURO", collateralFactor: 3000, liquidationFactor: 12000, collateralEtherAmount: "0.5" },
      { name: "AionicYEN", symbol: "AJYN", collateralFactor: 4000, liquidationFactor: 11000, collateralEtherAmount: "0.5" },
      { name: "AionicGBP", symbol: "AGPB", collateralFactor: 5000, liquidationFactor: 13000, collateralEtherAmount: "0.5" },
      { name: "AionicYUAN", symbol: "ACNY", collateralFactor: 4000, liquidationFactor: 11000, collateralEtherAmount: "0.5" },
    ];

    const [owner] = await hre.ethers.getSigners();
    const { precision, borrowingRatio, liquidatorFee, daoFee, collectorFee, decimals, initialEthPrice } = config;

    const ethAggregator = await deployMockAggregator();
    console.log(`Mock ETH Aggregator deployed to: ${await ethAggregator.getAddress()}`);

    const ethPriceFeed = await deployMockDataFeed(decimals, initialEthPrice, await ethAggregator.getAddress());
    console.log(`Mock ETH Data Feed deployed to: ${await ethPriceFeed.getAddress()}`);

    const Window = await hre.ethers.getContractFactory("Window");
    const windowContract = await Window.deploy(
      owner.address,
      precision,
      borrowingRatio,
      collectorFee,
      daoFee,
      liquidatorFee,
      ethPriceFeed.getAddress()
    );
    await windowContract.waitForDeployment();
    console.log(`Window deployed to: ${await windowContract.getAddress()}`);

    filesystem.copy('template-subgraph.yaml', 'subgraph.yaml', { overwrite: true });
    await patching.replace(
      path.join(srcDir, 'subgraph.yaml'),
      'DEPLOYED_CONTRACT_ADDRESS',
      windowContract.target,
    );

    const loanAddresses = [];
    const assetAddresses = {};
    const assetPriceFeeds = {};

    for (const asset of assets) {
      let assetDataFeed;
      let currentPrice;

      if (asset.symbol === "AUSD") {
        assetDataFeed = await deployConstantChainlinkFeed();
      } else {
        // Fetch the current exchange rate
        const currencyCode = currencyMapping[asset.symbol];
        if (!currencyCode) {
          throw new Error(`No currency code mapping found for symbol: ${asset.symbol}`);
        }
        currentPrice = await fetchExchangeRate(currencyCode);

        // Scale the price according to the decimals
        const initialPriceScaled = BigInt(Math.round(currentPrice * 10 ** Number(decimals)));
        const assetAggregator = await deployMockAggregator();
        console.log(`Mock ${asset.name} Aggregator deployed to: ${await assetAggregator.getAddress()}`);

        assetDataFeed = await deployMockDataFeed(decimals, initialPriceScaled, await assetAggregator.getAddress());
      }
      const assetDataFeedAddress = await assetDataFeed.getAddress();
      console.log(`Mock ${asset.name} Data Feed deployed to: ${assetDataFeedAddress}`);

      assetPriceFeeds[asset.symbol] = assetDataFeed;

      const assetAddress = await approveAsset(
        windowContract,
        assetDataFeedAddress,
        asset.name,
        asset.symbol,
        asset.collateralFactor,
        asset.liquidationFactor
      );
      console.log(`Asset Address: ${assetAddress}`);

      assetAddresses[asset.symbol] = assetAddress;

      const loan = await issueLoan(windowContract, assetAddress, asset.collateralEtherAmount);
      console.log(`Loan Address: ${loan.loanAddress}`);
      console.log(`Amount Asset Issued: ${loan.amountIssued} ${asset.symbol}`);

      loanAddresses.push(loan.loanAddress);
    }

    console.log("Loan Addresses:", loanAddresses);

    const Loan = await hre.ethers.getContractFactory("Loan");

    // Collect loans for specific assets if needed
    for (let i = 1; i <= 2; i++) {
      const loanContract = Loan.attach(loanAddresses[i]);
      await loanContract.collect();
    }

    // Start continuous price updates for non-constant feeds
    const updateInterval = 100000; // Update every 10 seconds

    const nonConstantSymbols = assets
      .filter(asset => asset.symbol !== "AUSD")
      .map(asset => asset.symbol);

    const updatePrices = async () => {
      for (const symbol of nonConstantSymbols) {
        const currencyCode = currencyMapping[symbol];
        if (!currencyCode) {
          console.error(`No currency code mapping found for symbol: ${symbol}`);
          continue;
        }
        try {
          const newPrice = await fetchExchangeRate(currencyCode);
          const newPriceScaled = BigInt(Math.round(newPrice * 10 ** Number(decimals)));
          await simulatePriceChange(assetPriceFeeds, symbol, newPriceScaled);
        } catch (error) {
          console.error(`Failed to update price for ${symbol}: ${error.message}`);
        }
      }
    };

    // Perform initial price update
    await updatePrices();

    // Set up periodic price updates
    const priceUpdateInterval = setInterval(async () => {
      await updatePrices();
    }, updateInterval);

    // Run your subgraph synchronization
    await system.run(`npm run codegen`, { cwd: srcDir });
    await system.run(`npm run create-test`, { cwd: srcDir });
    await system.run(`npm run deploy-test`, { cwd: srcDir });

    await waitForSubgraphToBeSynced();

    // Keep the script running to allow continuous updates
    console.log("Continuous price updates started. Press Ctrl+C to exit.");

    // Optionally, you can set a timeout to stop updates after a certain period
    // For example, stop after 1 minute:
    // setTimeout(() => {
    //   clearInterval(priceUpdateInterval);
    //   console.log("Stopped continuous price updates.");
    //   process.exit(0);
    // }, 60000);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();