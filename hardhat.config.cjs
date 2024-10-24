require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require('hardhat-dependency-compiler');
const dotenv = require("dotenv");

dotenv.config();

const SEED_PHRASE = process.env.SEED_PHRASE

/** @type import('hardhat/config').HardhatUserConfig */
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
        chainId: 56700,
      }
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    }
  },
  dependencyCompiler: {
    paths: [
      '@openzeppelin/contracts/governance/Governor.sol',
    ],
  }
};
