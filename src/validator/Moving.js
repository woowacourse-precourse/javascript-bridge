const { BASE } = require('../Constants');
const ValidationError = require('../error/ValidationError');
const Base = require('./Base');

class Moving {
  #input;

  #Base;

  constructor() {
    this.#Base = new Base();
  }

  checkInput(input) {
    this.#input = input;
    this.#checkUOrD();
    this.#checkLength();
  }

  #checkUOrD() {
    if (/[^UD]/g.test(this.#input)) {
      throw new ValidationError(`${BASE.u_or_d}`);
    }
  }

  #checkLength() {
    this.#Base.checkLength(this.#input);
  }
}

module.exports = Moving;
