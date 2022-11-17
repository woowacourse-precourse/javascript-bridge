const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { ERROR_MESSAGE } = require('../utils/Constant');

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = '';
  }

  static validate(number) {
    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGE.BRIDGE_ISNAN);
    }
    if (number < 3 || number > 20) throw new Error(ERROR_MESSAGE.BRIDGE_RANGE);
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
