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
    // Wait for 10s
    const deadline = Date.now() + 10 * 1000;

    const checkSubgraphSynced = async () => {
      if (Date.now() > deadline) {
        reject('Timeout while waiting for the subgraph to be synced');
      }

      // Query the subgraph meta data for the indexing status
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

    filesystem.copy('template-subgraph.yaml', 'subgraph.yaml', { overwrite: true });
    // Insert its address into subgraph manifest
    await patching.replace(
      path.join(srcDir, 'subgraph.yaml'),
      'DEPLOYED_CONTRACT_ADDRESS',
      window.target,
    );

    const latestRoundData = await ethDataFeed.latestRoundData();

    console.log(`${latestRoundData}`);

    const AssetDataFeed = await hre.ethers.getContractFactory("MockAggregatorV3Interface");
    const assetDataFeed = await AssetDataFeed.deploy(decimals, initialAssetPrice);

    await assetDataFeed.waitForDeployment();

    const assetDataFeedAddress = await assetDataFeed.getAddress();
    console.log(`Mock Asset Data Feed deployed to: ${assetDataFeedAddress}`);
    
    let tx = await window.approveAsset(assetDataFeedAddress, "Nvidia", "ANVDA", 200, 12500);
    let result = await tx.wait();
    let assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
    console.log('Asset Address: ', assetEntityEvents[0].args[0]);

    let options = {value: ethers.parseEther("1.0")}
    let tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    let result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} ANVDA`);

    tx = await window.approveAsset(assetDataFeedAddress, "Amazon", "AAMZN", 300, 12000);
    result = await tx.wait();
    assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
    console.log('Asset Address: ', assetEntityEvents[0].args[0]);

    options = {value: ethers.parseEther(".5")}
    tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} AAMZN`);

    tx = await window.approveAsset(assetDataFeedAddress, "Apple", "AAAPL", 400, 11000);
    result = await tx.wait();
    assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
    console.log('Asset Address: ', assetEntityEvents[0].args[0]);

    options = {value: ethers.parseEther(".5")}
    tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} AAPL`);

    tx = await window.approveAsset(assetDataFeedAddress, "Google", "AGOOG", 500, 13000);
    result = await tx.wait();
    assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
    console.log('Asset Address: ', assetEntityEvents[0].args[0]);

    options = {value: ethers.parseEther(".5")}
    tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} AGOOG`);

    tx = await window.approveAsset(assetDataFeedAddress, "Microsoft", "AMCST", 400, 11000);
    result = await tx.wait();
    assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
    console.log('Asset Address: ', assetEntityEvents[0].args[0]);

    options = {value: ethers.parseEther(".5")}
    tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} AMCST`);

    tx = await window.approveAsset(assetDataFeedAddress, "ConocoPhillips", "ACOP", 500, 13000);
    result = await tx.wait();
    assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
    console.log('Asset Address: ', assetEntityEvents[0].args[0]);

    options = {value: ethers.parseEther(".5")}
    tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} ACOP`);

    tx = await window.approveAsset(assetDataFeedAddress, "AMD", "AAMD", 500, 13000);
    result = await tx.wait();
    assetEntityEvents = result.logs.filter((event) => event.fragment.name == "AssetEntity");
    console.log('Asset Address: ', assetEntityEvents[0].args[0]);

    options = {value: ethers.parseEther(".5")}
    tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} AAMD`);

    

    options = {value: ethers.parseEther("1.0")}
    tx2 = await window.issue(assetEntityEvents[0].args[0], options);
    result2 = await tx2.wait();
    console.log(`Loan Address: ${result2.logs[3].args[0]}`);
    console.log(`Amount Asset Issued: ${result2.logs[3].args[4]} AGOOG`);

    // Create and deploy the subgraph
    await system.run(`npm run codegen`, { cwd: srcDir });
    await system.run(`npm run create-test`, { cwd: srcDir });
    await system.run(`npm run deploy-test`, { cwd: srcDir });

    // Wait for the subgraph to be indexed
    await waitForSubgraphToBeSynced();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();