const Exceptionable = require('./Exceptionable');
const { ERROR_MESSAGE, REGEX } = require('../../utils/constants');

class BrdgeRestartExitException extends Exceptionable {
  #command;

  constructor(command) {
    super();

    this.#command = command;
  }

  isValidate() {
    if (!REGEX.restartExitKey.test(this.#command)) {
      throw new Error(ERROR_MESSAGE.restartExitKey);
    }
  }
}

module.exports = BrdgeRestartExitException;
