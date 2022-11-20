const { GAME_RULE } = require('../../constants');

const Command = require('./Command');

class MovingCommand extends Command {
  constructor(command) {
    MovingCommand.#validate(command);
    super(command);
  }

  static #validate(command) {
    if (!MovingCommand.#isValid(command)) {
      throw '[ERROR] 이동할 칸 입력 값은 U 또는 D여야 합니다.';
    }
  }

  static #isValid(command) {
    return command === GAME_RULE.UPSIDE || command === GAME_RULE.DOWNSIDE;
  }
}

module.exports = MovingCommand;
