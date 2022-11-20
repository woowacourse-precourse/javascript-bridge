const Validator = require('./Validator');
const { ERROR_MESSAGE } = require('../utils/constant');

class GameCommandValidator extends Validator {
  #command;

  #regex = /R|Q/;

  constructor(command) {
    super();

    this.#command = command;
  }

  validate() {
    if (!this.#regex.test(this.#command)) throw new Error(ERROR_MESSAGE.RETRY);
  }
}

module.exports = GameCommandValidator;
