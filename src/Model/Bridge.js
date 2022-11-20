const { makeBridge } = require('../BridgeMaker');
const {
  isNumber,
  isNaturalNumber,
  isRightNumberRange,
} = require('../Utils/Validator');

class Bridge {
  #bridge;

  #generator;

  constructor(input, generator) {
    this.#generator = generator;
    this.#bridge = this.setBridge(input);
  }

  static validate(number) {
    isNumber(number);
    isNaturalNumber(number);
    isRightNumberRange(3, 20, number);
  }

  get length() {
    return this.#bridge.length;
  }

  getElement(i) {
    return this.#bridge[i];
  }

  setBridge(number) {
    this.constructor.validate(number);
    return makeBridge(number, this.#generator);
  }
}

module.exports = Bridge;
