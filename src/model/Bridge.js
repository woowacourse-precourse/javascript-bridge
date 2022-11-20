const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const { validateBridgeSize } = require('../errorHandling');

class Bridge {
  #bridge;

  constructor(size) {
    this.validate(size);
    this.#bridge = BridgeMaker.makeBridge(size, () =>
      BridgeRandomNumberGenerator.generate()
    );
  }

  getBridge() {
    return this.#bridge;
  }

  validate(size) {
    validateBridgeSize.validate(size);
  }
}

module.exports = Bridge;
