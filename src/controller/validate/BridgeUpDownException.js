const Exceptionable = require('./Exceptionable');
const { ERROR_MESSAGE, REGEX } = require('../../utils/constants');

class BrdgeUpDownException extends Exceptionable {
  #command;

  constructor(command) {
    super();

    this.#command = command;
  }

  getValidation() {
    if (!REGEX.upDownKey.test(this.#command)) {
      throw new Error(ERROR_MESSAGE.upDownKey);
    }

    return this.#command;
  }
}

module.exports = BrdgeUpDownException;
