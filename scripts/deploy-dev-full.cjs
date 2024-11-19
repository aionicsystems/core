const hre = require("hardhat");
const path = require('node:path');
// Importing required modules and libraries from the ethers.js library.
const { Contract, ContractFactory } = require("ethers");
const { system, patching, filesystem } = require('gluegun');
const { createApolloFetch } = require('apollo-fetch');
const { ethers } = require('hardhat');
const srcDir = path.join(__dirname, '..');
const factoryArtifact = require("@uniswap/v2-core/build/UniswapV2Factory.json");
const routerArtifact = require("@uniswap/v2-periphery/build/UniswapV2Router02.json");
const pairArtifact = require("@uniswap/v2-periphery/build/IUniswapV2Pair.json");
const USDTArtifact = require("@openzeppelin/contracts/build/contracts/ERC20.json");
const WETH9 = require("@uniswap/v2-periphery/build/WETH9.json");

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

async function deployUniswapContracts(owner) {
  console.log(`Deploying contracts with the account: ${owner.address}`);

  // 2. Initialize a new contract factory for the Uniswap V2 Factory.
  // This factory requires the ABI and bytecode from the factoryArtifact.
  const Factory = new ContractFactory(
    factoryArtifact.abi,
    factoryArtifact.bytecode,
    owner
  );

  // 3. Use the initialized factory to deploy a new Factory contract.
  // The deployment is signed by the owner.
  const factory = await Factory.deploy(owner.address);

  // 4. After deployment, retrieve the address of the newly deployed Factory contract.
  const factoryAddress = await factory.getAddress();
  console.log(`Factory deployed to ${factoryAddress}`);

  await patching.replace(
    path.join(srcDir, 'subgraph.yaml'),
    'DEPLOYED_UNISWAP_FACTORY_ADDRESS',
    factoryAddress,
  );

  // 18. Initialize a new contract factory for the WETH9 contract.
  const WETH = new ContractFactory(WETH9.abi, WETH9.bytecode, owner);
  const weth = await WETH.deploy();
  const wethAddress = await weth.getAddress();
  console.log(`WETH deployed to ${wethAddress}`);

  const wethDeposit = await weth.deposit({ value: ethers.parseEther("1000") });

  // 19. Initialize a new contract factory for the Router contract.
  const Router = new ContractFactory(
    routerArtifact.abi,
    routerArtifact.bytecode,
    owner
  );

  // 20. Deploy the Router contract using the above-initialized factory.
  const router = await Router.deploy(factoryAddress, wethAddress);
  const routerAddress = await router.getAddress();
  console.log(`Router deployed to ${routerAddress}`);

  return { factory, router, weth };
}

async function addLiquidity(router, tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline) {
  // Check if tokenA and tokenB are contract addresses
  const codeA = await hre.ethers.provider.getCode(tokenA);
  const codeB = await hre.ethers.provider.getCode(tokenB);

  if (codeA === '0x' || codeB === '0x') {
    throw new Error('One of the token addresses is not a contract');
  }

  // Approve the router to spend the tokens
  const tokenAContract = await hre.ethers.getContractAt("@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20", tokenA);
  const tokenBContract = await hre.ethers.getContractAt("WETH9", await tokenB);

  const routerAddress = await router.getAddress();

  // Check balances
  const balanceA = await tokenAContract.balanceOf(to);
  const balanceB = await tokenBContract.balanceOf(to);
  console.log(`Balance of tokenA: ${balanceA.toString()}`);
  console.log(`Balance of tokenB: ${balanceB.toString()}`);

  if (Number(balanceA) < Number(amountADesired) || Number(balanceB) < Number(amountBDesired)) {
    console.log(`AmountA: ${amountADesired.toString()}, AmountB: ${amountBDesired.toString()}`);
    console.log(`BalanceA: ${balanceA.toString()}, BalanceB: ${balanceB.toString()}`);
    throw new Error('Insufficient token balance');
  }

  // Approve tokens
  const allowanceA = await tokenAContract.allowance(to, routerAddress);
  const allowanceB = await tokenBContract.allowance(to, routerAddress);
  console.log(`Allowance of tokenA: ${allowanceA.toString()}`);
  console.log(`Allowance of tokenB: ${allowanceB.toString()}`);

  if (Number(allowanceA) < Number(amountADesired)) {
    const approveTxA = await tokenAContract.approve(routerAddress, amountADesired);
    await approveTxA.wait();
    console.log(`Approved ${amountADesired.toString()} of tokenA to router`);
  }

  if (Number(allowanceB) < Number(amountBDesired)) {
    const approveTxB = await tokenBContract.approve(routerAddress, amountBDesired);
    await approveTxB.wait();
    console.log(`Approved ${amountBDesired.toString()} of tokenB to router`);
  }

  // Add liquidity
  const tx = await router.addLiquidity(
    tokenA,
    tokenB,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline
  );
  await tx.wait();
  console.log(`Liquidity added for pair ${tokenA} - ${tokenB}`);
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

    // Deploy Uniswap contracts
    const { factory, router, weth } = await deployUniswapContracts(owner);

    // Add liquidity for each asset pair with USDT
    for (const asset of assets) {
      const assetAddress = assetAddresses[asset.symbol];
      const amountTokenDesired = ethers.parseUnits("1", 18); // Example amount
      const amountTokenMin = ethers.parseUnits("1", 18); // Example amount
      const amountUSDTDesired = ethers.parseUnits("10", 6); // Example amount (USDT typically has 6 decimals)
      const amountUSDTMin = ethers.parseUnits("90", 6); // Example amount (USDT typically has 6 decimals)
      const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time
      console.log(`Adding liquidity for ${assetAddress} - USDT pair...`);
      await addLiquidity(router, assetAddress, weth.getAddress(), amountTokenDesired, amountUSDTDesired, amountTokenMin, amountUSDTMin, owner.address, deadline);
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
          const currentPrice = await assetPriceFeeds[symbol].latestAnswer();
          if (currentPrice !== newPriceScaled) {
            await simulatePriceChange(assetPriceFeeds, symbol, newPriceScaled);
          }
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