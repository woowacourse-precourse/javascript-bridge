const { Console } = require('@woowacourse/mission-utils');
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
      Console.print(ERROR_MESSAGE.upDownKey);
      return false;
    }

    return true;
  }
}

module.exports = BrdgeUpDownException;
