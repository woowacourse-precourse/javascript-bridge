const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const BridgeMakerController = {
  getSize(value) {
    this.size = Number(value);
    this.setBridgeData();
  },
  setBridgeData() {
    BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator);
  },
};

module.exports = BridgeMakerController;
