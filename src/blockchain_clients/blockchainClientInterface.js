// src/blockchain_clients/blockchainClientInterface.js

class BlockchainClientInterface {
    constructor(config) {
      if (new.target === BlockchainClientInterface) {
        throw new Error("Cannot instantiate an interface directly.");
      }
      this.config = config;
    }
  
    async connect() {
      throw new Error("Method 'connect()' must be implemented.");
    }
  
    async getBalance(address, tokenMint) {
      throw new Error("Method 'getBalance(address, tokenMint)' must be implemented.");
    }
  
    async sendTransaction(transactionData) {
      throw new Error("Method 'sendTransaction(transactionData)' must be implemented.");
    }
  
    async getTransactionDetails(txHash) {
      throw new Error("Method 'getTransactionDetails(txHash)' must be implemented.");
    }
  
    async subscribeToAccount(address, callback) {
      throw new Error("Method 'subscribeToAccount(address, callback)' must be implemented.");
    }
  
    async getRecentTransactions(address) {
      throw new Error("Method 'getRecentTransactions(address)' must be implemented.");
    }
  
    // Podrían agregarse más métodos, p.ej. para obtener datos de mercado, etc.
  }
  
  module.exports = BlockchainClientInterface;
  