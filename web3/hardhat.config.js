require("@matterlabs/hardhat-zksync-solc");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 80001
    },
    goerli: {
      url: 'https://goerli.rpc.thirdweb.com/15065ae3c21e0bff07eaf80b713a6ef0',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 5
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
