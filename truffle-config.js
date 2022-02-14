require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider');
const seed_phrase = 'custom else expose dinner little clown among catch enhance romance produce lucky'
const infura_link = "wss://rinkeby.infura.io/ws/v3/cc2b51e3ea144fe395f1621157f74116"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" // Match any network id
    },

    // rinkeby: {
    //   provider: () => new HDWalletProvider(seed_phrase, "https://rinkeby.infura.io/v3/cc2b51e3ea144fe395f1621157f74116"),
    //   network_id: 4,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
