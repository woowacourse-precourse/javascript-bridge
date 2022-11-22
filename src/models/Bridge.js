const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { BRIDGE, ERROR_MESSAGE } = require('../utils/Constants');

class Bridge {
  #bridge;

  constructor(input) {
    this.validation(input);
    this.#bridge = this.makeRandomBridge(input);
  }

  checkMove(letter, index) {
    if (this.#bridge[index] === letter) {
      return [letter, true];
    }
    return [letter, false];
  }

  get bridgeLength() {
    return this.#bridge.length;
  }

  makeRandomBridge(input) {
    const bridgeGenerator = BridgeRandomNumberGenerator.generate;
    const randomBridge = BridgeMaker.makeBridge(input, bridgeGenerator);

    return randomBridge;
  }

  validation(input) {
    this.#validForm(input);
    this.#validRange(input);
  }

  #validForm(input) {
    const reg = /^[0-9]+$/;

    if (!reg.test(input)) {
      throw new Error(ERROR_MESSAGE.bridge.form);
    }
  }

  #validRange(input) {
    if (input < BRIDGE.range.minimum || BRIDGE.range.maximum < input) {
      throw new Error(ERROR_MESSAGE.bridge.range);
    }
  }
}

module.exports = Bridge;
