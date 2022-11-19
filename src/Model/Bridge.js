const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const BridgeError = require('../Error/BridgeError');
const { ERROR_MESSAGE } = require('../utils/Constant');

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = '';
  }

  static validate(number) {
    const regex = /^[0-9-]{1,2}$/g;

    if (!regex.test(number)) {
      throw new BridgeError(ERROR_MESSAGE.BRIDGE_ISNAN);
    }
    if (number < 3 || number > 20)
      throw new BridgeError(ERROR_MESSAGE.BRIDGE_RANGE);
  }

  setBridge(number) {
    this.constructor.validate(number);
    this.#bridge = makeBridge(number, generate);
  }

  getLength() {
    return this.#bridge.length;
  }

  getBridge(i) {
    return this.#bridge[i];
  }
}

module.exports = Bridge;
