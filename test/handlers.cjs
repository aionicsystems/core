const path = require('node:path');
const { system, patching, filesystem } = require('gluegun');
const { createApolloFetch } = require('apollo-fetch');
const { ethers } = require('hardhat');
const { expect } = require('chai');

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

describe('Basic event handlers', () => {
  // Deploy the subgraph once before all tests
  before(async () => {
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
    const [owner, otherAccount] = await ethers.getSigners();

    const EthDataFeed = await ethers.getContractFactory("MockAggregatorV3Interface");
    const ethDataFeed = await EthDataFeed.deploy(decimals, initialEthPrice);

    const Brokerage = await ethers.getContractFactory("Brokerage");
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

    const accounts = await ethers.getSigners();

    filesystem.copy('template-subgraph.yaml', 'subgraph.yaml', { overwrite: true });
    // Insert its address into subgraph manifest
    await patching.replace(
      path.join(srcDir, 'subgraph.yaml'),
      'DEPLOYED_CONTRACT_ADDRESS',
      brokerage.target,
    );

    console.log(`Brokerage deployed to: ${await brokerage.getAddress()}`);

    const latestRoundData = await ethDataFeed.latestRoundData();

    console.log(`${latestRoundData}`);

    const AssetDataFeed = await ethers.getContractFactory("MockAggregatorV3Interface");
    const assetDataFeed = await AssetDataFeed.deploy(decimals, initialAssetPrice);

    await assetDataFeed.waitForDeployment();

    const assetDataFeedAddress = await assetDataFeed.getAddress();
    console.log(`Mock Asset Data Feed deployed to: ${assetDataFeedAddress}`);

    await brokerage.approveAsset(assetDataFeedAddress, "Nvidia", "NVDA", 400);

    // Create and deploy the subgraph
    await system.run(`npm run codegen`, { cwd: srcDir });
    await system.run(`npm run create-test`, { cwd: srcDir });
    await system.run(`npm run deploy-test`, { cwd: srcDir });

    // Wait for the subgraph to be indexed
    await waitForSubgraphToBeSynced();
  });

  it('all events are indexed', async () => {
    // Query the subgraph for entities
    const result = await fetchSubgraph({
      query: `
        {
          assetEntities(orderBy: id) { name symbol }
        }
      `,
    });

    expect(result.errors).to.be.undefined;
    expect(result.data).to.deep.equal({
      assetEntities: [
        {
          name: 'Nvidia',
          symbol: 'NVDA',
        },
      ],
    });
  });
});
