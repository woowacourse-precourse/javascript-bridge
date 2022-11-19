const Exceptionable = require('./Exceptionable');
const { ERROR_MESSAGE, REGEX } = require('../../utils/constants');

class BrdgeRestartExitException extends Exceptionable {
  #command;

  constructor(command) {
    super();

    this.#command = command;
  }

  getValidation() {
    if (!REGEX.restartExitKey.test(this.#command)) {
      throw new Error(ERROR_MESSAGE.restartExitKey);
    }

    return this.#command;
  }
}

module.exports = BrdgeRestartExitException;
