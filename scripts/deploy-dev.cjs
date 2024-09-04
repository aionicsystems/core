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

    const Window = await hre.ethers.getContractFactory("Window");
    const window = await Window.deploy(
      owner,
      precision,
      borrowingRatio,
      liquidationRatio,
      daoFee,
      collectorFee,
      ethDataFeed.getAddress()
    );

    await window.waitForDeployment();

    console.log(`Window deployed to: ${await window.getAddress()}`);

    const latestRoundData = await ethDataFeed.latestRoundData();

    console.log(`${latestRoundData}`);

    const AssetDataFeed = await hre.ethers.getContractFactory("MockAggregatorV3Interface");
    const assetDataFeed = await AssetDataFeed.deploy(decimals, initialAssetPrice);

    await assetDataFeed.waitForDeployment();

    const assetDataFeedAddress = await assetDataFeed.getAddress();
    console.log(`Mock Asset Data Feed deployed to: ${assetDataFeedAddress}`);
    
    await window.approveAsset(assetDataFeedAddress, "Nvidia", "ANVDA", 200, 12500);
    await window.approveAsset(assetDataFeedAddress, "Amazon", "AAMZN", 300, 12000);
    await window.approveAsset(assetDataFeedAddress, "Apple", "AAAPL", 400, 11000);
    await window.approveAsset(assetDataFeedAddress, "Google", "AGOOG", 500, 13000);

    
    // console.log(`Assets: ${await window.listAssets()}`);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();