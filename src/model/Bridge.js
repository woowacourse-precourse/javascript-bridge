const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const { validateBridgeSize } = require('../utils/errorHadling');

class Bridge {
  #bridge;

  constructor(size) {
    Bridge.validate(size);
    this.#bridge = BridgeMaker.makeBridge(size, () =>
      BridgeRandomNumberGenerator.generate()
    );
  }

  getBridge() {
    return this.#bridge;
  }

  static validate(size) {
    validateBridgeSize.validate(size);
  }
}

module.exports = Bridge;
