const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  validator;

  constructor(validator) {
    this.#bridge = '';
    this.validator = validator;
  }

  #validate(number) {
    this.validator.isNumber(number);
    this.validator.isRightNumberRange(3, 20, number);
  }

  get length() {
    return this.#bridge.length;
  }

  setBridge(number) {
    this.#validate(number);
    this.#bridge = makeBridge(number, generate);
  }

  getElement(i) {
    return this.#bridge[i];
  }
}

module.exports = Bridge;
