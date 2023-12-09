import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    }
  },
  networks: {
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/9UDUFcbGhSzUlaO6mtIAihVmt6HgeeTL"
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/nv5b_Oue8zaUA-ijImWzAQ66e4N6cOwm"
    }
  },
  etherscan: {
    apiKey: {
      polygon: '6RVSNVADVHISVKT9EUX37P8YGHWGH3P1DX',
      sepolia: 'D62920783A4311EE9D6600155D570C742E'
    }
  }
};

export default config;
