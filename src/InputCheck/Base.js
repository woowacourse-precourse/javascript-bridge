class Base {
  #inputValue;
  constructor(inputValue) {
    this.#inputValue = inputValue;
  }

  checkUOrD() {
    if (/[^UD]/g.test(this.#inputValue)) {
      throw new Error('[ERROR]');
    }
  }
  checkROrQ() {
    if (/[^RQ]/g.test(this.#inputValue)) {
      throw new Error('[ERROR]');
    }
  }

  checkLength() {
    if (this.isNotLengthOne()) {
      throw new Error('[ERROR]');
    }
    return this.#inputValue;
  }

  isNotLengthOne() {
    return this.#inputValue.length !== 1;
  }

  checkNumberLength() {
    if (!this.isLengthOneOrTwo()) {
      throw new Error('[ERROR]');
    }
    return this.#inputValue;
  }

  isLengthOneOrTwo() {
    return this.#inputValue.length === 1 || this.#inputValue.length === 2;
  }

  checkOnlyNumber() {
    if (/\D/.test(this.#inputValue)) {
      throw 'ERROR';
    }
  }

  checkCorrectNumberRange() {
    if (this.isFitRange()) {
      throw new Error('[ERROR]');
    }
  }

  isFitRange() {
    return this.#inputValue < 3 || this.#inputValue > 20;
  }
}

module.exports = Base;
