const Validation = require('../Utilities/Validation');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const { generate } = BridgeRandomNumberGenerator;
class Model {
  #bridge;

  genBridge(bridgeSize) {
    Validation.isBridgeSizeValid(bridgeSize);
    this.#bridge = BridgeMaker.makeBridge(+bridgeSize, generate);
  }
}

module.exports = Model;
