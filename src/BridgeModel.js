const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeModel {
  constructor() {
    this.bridge;
  }

  setBridge(size) {
    this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
}

module.exports = BridgeModel;
