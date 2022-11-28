const { BASE } = require('../Constants');
const ValidationError = require('../error/ValidationError');

class BridgeSize {
  #input;

  checkInput(input) {
    this.#input = input;
    this.#checkOnlyNumber();
    this.#checkCorrectNumberRange();
    this.#checkNumberLength();
  }

  #checkOnlyNumber() {
    if (/\D/.test(this.#input)) {
      throw new ValidationError(`${BASE.only_number}`);
    }
  }

  #checkCorrectNumberRange() {
    if (this.#isFitRange(this.#input)) {
      throw new ValidationError(`${BASE.range}`);
    }
  }

  #isFitRange() {
    return this.#input < 3 || this.#input > 20;
  }

  #checkNumberLength() {
    if (!this.#isLengthOneOrTwo()) {
      throw new ValidationError(`${BASE.two_length}`);
    }
  }

  #isLengthOneOrTwo() {
    return this.#input.length === 1 || this.#input.length === 2;
  }
}

module.exports = BridgeSize;
