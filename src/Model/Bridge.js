const { makeBridge } = require('../BridgeMaker');
const {
  isNumber,
  isNaturalNumber,
  isRightNumberRange,
} = require('../Utils/Validator');

class Bridge {
  #bridge;

  #generator;

  constructor(generator) {
    this.#bridge = '';
    this.#generator = generator;
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
    this.#bridge = makeBridge(number, this.#generator);
  }
}

module.exports = Bridge;
