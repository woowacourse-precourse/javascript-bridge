const { makeBridge } = require('../BridgeMaker');

class Bridge {
  #bridge;

  #validator;

  #generator;

  constructor(validator, generator) {
    this.#bridge = '';
    this.#validator = validator;
    this.#generator = generator;
  }

  #validate(number) {
    this.#validator.isNumber(number);
    this.#validator.isNaturalNumber(number);
    this.#validator.isRightNumberRange(3, 20, number);
  }

  get length() {
    return this.#bridge.length;
  }

  getElement(i) {
    return this.#bridge[i];
  }

  setBridge(number) {
    this.#validate(number);
    this.#bridge = makeBridge(number, this.#generator);
  }
}

module.exports = Bridge;
