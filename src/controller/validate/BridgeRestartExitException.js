const { Console } = require('@woowacourse/mission-utils');
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
      Console.print(ERROR_MESSAGE.restartExitKey);
      return false;
    }

    return true;
  }
}

module.exports = BrdgeRestartExitException;
