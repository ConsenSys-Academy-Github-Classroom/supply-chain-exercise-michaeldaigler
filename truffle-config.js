module.exports = {
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  },
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
