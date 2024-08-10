require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
const dotenv = require("dotenv");

dotenv.config();

const SEED_PHRASE = process.env.SEED_PHRASE

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: SEED_PHRASE,
      },
      chainId: 1337,
    }
  }
};
