// src/services/investmentStrategy.js

class InvestmentStrategy {
    constructor({ mode, fixedAmount, percentage, proportionalFactor }, blockchainClient) {
      this.mode = mode; // 'fixed', 'percentage', 'proportional'
      this.fixedAmount = fixedAmount || 0; 
      this.percentage = percentage || 0; 
      this.proportionalFactor = proportionalFactor || 1; 
      this.blockchainClient = blockchainClient;
    }
  
    async calculateInvestmentAmount(masterOp) {
      // masterOp.amount es la cantidad de la operación de la cartera maestra
      switch (this.mode) {
        case 'fixed':
          return this.fixedAmount;
        case 'percentage':
          const myBalance = await this.blockchainClient.getBalance(/* dirección del bot, token base */);
          return (myBalance * this.percentage / 100);
        case 'proportional':
          return masterOp.amount * this.proportionalFactor;
        default:
          throw new Error("Modo de inversión no definido");
      }
    }
  }
  
  module.exports = InvestmentStrategy;
  