const { BRIDGE_RULE } = require('../../constants');
const InputValidator = require('../../utils/InputValidator');

const Command = require('./Command');

class SizeCommand extends Command {
  constructor(command) {
    SizeCommand.#validate(command);
    super(command);
  }

  static #validate(command) {
    InputValidator.validateEmpty(command);
    InputValidator.validateSpace(command);
    InputValidator.validateNumber(command);

    if (!SizeCommand.#isValid(command)) {
      throw '[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.';
    }
  }

  static #isValid(command) {
    return command >= BRIDGE_RULE.LENGTH_MIN && command <= BRIDGE_RULE.LENGTH_MAX;
  }
}

module.exports = SizeCommand;
