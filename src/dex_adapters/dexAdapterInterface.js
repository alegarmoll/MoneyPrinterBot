// src/dex_adapters/dexAdapterInterface.js

class DexAdapterInterface {
    constructor(client) {
      if (new.target === DexAdapterInterface) {
        throw new Error("Cannot instantiate an interface directly.");
      }
      this.client = client; // Cliente blockchain (SolanaClient, EthereumClient, etc.)
    }
  
    async swap(fromToken, toToken, amount) {
      throw new Error("Method 'swap(fromToken, toToken, amount)' must be implemented.");
    }
  }
  
  module.exports = DexAdapterInterface;
  