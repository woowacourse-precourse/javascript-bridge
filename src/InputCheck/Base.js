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
    if (this.#inputValue.length !== 1) {
      throw new Error('[ERROR]');
    }
    return this.#inputValue;
  }

  checkNumberLength() {
    if (!(this.#inputValue.length === 1 || this.#inputValue.length === 2)) {
      throw new Error('[ERROR]');
    }
    return this.#inputValue;
  }

  checkOnlyNumber() {
    if (/\D/.test(this.#inputValue)) {
      throw 'ERROR';
    }
  }

  checkCorrectNumberRange() {
    if (this.#inputValue < 3 || this.#inputValue > 20) {
      throw new Error('[ERROR]');
    }
  }
}

module.exports = Base;
