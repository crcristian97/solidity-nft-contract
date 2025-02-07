const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { infuraKey, mnemonic } = require('./secrets.json');

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*", // Match any network id
        },
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
            network_id: 4,       // Rinkeby's id
            gas: 5500000,        // Rinkeby has a lower block limit than mainnet
            confirmations: 2,     // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200,   // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true      // Skip dry run before migrations? (default: false for public nets )
        }
    },
    compilers: {
        solc: {
            version: "0.8.0",    // Specify compiler version
        }
    }
};
