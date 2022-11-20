const Exceptionable = require('./Exceptionable');
const { ERROR_MESSAGE, REGEX } = require('../../utils/constants');

class BrdgeUpDownException extends Exceptionable {
  #command;

  constructor(command) {
    super();

    this.#command = command;
  }

  isValidate() {
    if (!REGEX.upDownKey.test(this.#command)) {
      throw new Error(ERROR_MESSAGE.upDownKey);
    }
  }
}

module.exports = BrdgeUpDownException;
