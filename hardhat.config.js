require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "volta",
  networks: {
    hardhat: {},
    volta: {
      url: "https://volta-rpc.energyweb.org",
   accounts: [`0x$ {process.env.PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 800000000000,
    },
  },
};
