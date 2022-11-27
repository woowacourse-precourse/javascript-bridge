const { BASE } = require('../Constants');
const ValidationError = require('../error/ValidationError');

class Base {
  #inputValue;
  constructor(inputValue) {
    this.#inputValue = inputValue;
  }

  checkUOrD() {
    if (/[^UD]/g.test(this.#inputValue)) {
      throw new ValidationError(`${BASE.u_or_d}`);
    }
  }
  checkROrQ() {
    if (/[^RQ]/g.test(this.#inputValue)) {
      throw new ValidationError(`${BASE.r_or_q}`);
    }
  }

  checkLength() {
    if (this.isNotLengthOne()) {
      throw new ValidationError(`${BASE.one_length}`);
    }
    return this.#inputValue;
  }

  isNotLengthOne() {
    return this.#inputValue.length !== 1;
  }

  checkNumberLength() {
    if (!this.isLengthOneOrTwo()) {
      throw new ValidationError(`${BASE.two_length}`);
    }
    return this.#inputValue;
  }

  isLengthOneOrTwo() {
    return this.#inputValue.length === 1 || this.#inputValue.length === 2;
  }

  checkOnlyNumber() {
    if (/\D/.test(this.#inputValue)) {
      throw new ValidationError(`${BASE.only_number}`);
    }
  }

  checkCorrectNumberRange() {
    if (this.isFitRange()) {
      throw new ValidationError(`${BASE.range}`);
    }
  }

  isFitRange() {
    return this.#inputValue < 3 || this.#inputValue > 20;
  }
}

module.exports = Base;
