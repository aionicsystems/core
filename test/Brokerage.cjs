const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");


describe("Brokerage", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBrokerageFixture() {
    const precision = BigInt(4);
    const borrowingRatio = BigInt(15000);
    const daoFee = BigInt(300);
    const liquidatorFee = BigInt(200);
    const collectorFee = BigInt(100);

    const decimals = BigInt(8);
    const initialEthPrice = BigInt(250000000000);

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const EthDataFeed = await hre.ethers.getContractFactory("MockAggregatorV3Interface");
    const ethDataFeed = await EthDataFeed.deploy(decimals, initialEthPrice);

    const Brokerage = await hre.ethers.getContractFactory("Brokerage");
    const brokerage = await Brokerage.deploy(
      owner,
      precision,
      borrowingRatio,
      daoFee,
      liquidatorFee,
      collectorFee,
      ethDataFeed.getAddress()
    );

    

    return { brokerage, ethDataFeed, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should have right owner", async function () {
      const { owner, brokerage } = await loadFixture(deployBrokerageFixture);
      expect(await brokerage.owner()).to.equal(owner);
    });
  });
});
