const hre = require("hardhat");

async function main() {
  try {
    
    const precision = BigInt(4);
    const borrowingRatio = BigInt(15000);
    const liquidationRatio = BigInt(12500);
    const daoFee = BigInt(300);
    const liquidatorFee = BigInt(200);
    const collectorFee = BigInt(100);

    const decimals = BigInt(8);
    const initialEthPrice = BigInt(250000000000);
    const initialAssetPrice = BigInt(20000000000);

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const EthDataFeed = await hre.ethers.getContractFactory("MockAggregatorV3Interface");
    const ethDataFeed = await EthDataFeed.deploy(decimals, initialEthPrice);

    await ethDataFeed.waitForDeployment();

    console.log(`Mock ETH Data Feed deployed to: ${await ethDataFeed.getAddress()}`);

    const Brokerage = await hre.ethers.getContractFactory("Brokerage");
    const brokerage = await Brokerage.deploy(
      owner,
      precision,
      borrowingRatio,
      liquidationRatio,
      daoFee,
      liquidatorFee,
      collectorFee,
      ethDataFeed.getAddress()
    );

    await brokerage.waitForDeployment();

    console.log(`Brokerage deployed to: ${await brokerage.getAddress()}`);

    const latestRoundData = await ethDataFeed.latestRoundData();

    console.log(`${latestRoundData}`);

    const AssetDataFeed = await hre.ethers.getContractFactory("MockAggregatorV3Interface");
    const assetDataFeed = await AssetDataFeed.deploy(decimals, initialAssetPrice);

    await assetDataFeed.waitForDeployment();

    const assetDataFeedAddress = await assetDataFeed.getAddress();
    console.log(`Mock Asset Data Feed deployed to: ${assetDataFeedAddress}`);

    await brokerage.approveAsset(assetDataFeedAddress, "Nvidia", "NVDA", 400);
    console.log(`Assets: ${await brokerage.listAssets()}`);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();