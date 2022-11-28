const { BASE } = require('../Constants');
const ValidationError = require('../error/ValidationError');

class Base {
  checkLength(input) {
    if (this.#isNotLengthOne(input)) {
      throw new ValidationError(`${BASE.one_length}`);
    }
  }

  #isNotLengthOne(input) {
    return input.length !== 1;
  }
}

module.exports = Base;
