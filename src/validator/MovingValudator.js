const Validator = require('./Validator');
const { ERROR_MESSAGE } = require('../utils/constant');

class MovingValidator extends Validator {
  #moving;

  #regex = /U|D/;

  constructor(moving) {
    super();

    this.#moving = moving;
  }

  validate() {
    if (!this.#regex.test(this.#moving)) throw new Error(ERROR_MESSAGE.MOVING);
  }
}

module.exports = MovingValidator;
