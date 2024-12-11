// src/dex_adapters/serumAdapter.js
const DexAdapterInterface = require('./dexAdapterInterface');

class SerumAdapter extends DexAdapterInterface {
  constructor(client, serumMarketAddress) {
    super(client);
    this.serumMarketAddress = serumMarketAddress;
  }

  async swap(fromToken, toToken, amount) {
    // Lógica para crear una orden en Serum (limit/market) y ejecutarla
    throw new Error("Serum swap not implemented yet.");
  }
}

module.exports = SerumAdapter;
