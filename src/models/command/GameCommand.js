const { GAME_RULE } = require('../../constants');

const Command = require('./Command');

class GameCommand extends Command {
  constructor(command) {
    GameCommand.#validate(command);
    super(command);
  }

  static #validate(command) {
    if (!GameCommand.#isValid(command)) {
      throw '[ERROR] 재시도 여부 입력값은 R 또는 Q여야 합니다.';
    }
  }

  static #isValid(command) {
    return command === GAME_RULE.RETRY || command === GAME_RULE.QUIT;
  }

  isRetry() {
    return this.getCommand() === GAME_RULE.RETRY;
  }

  isQuit() {
    return this.getCommand() === GAME_RULE.QUIT;
  }
}

module.exports = GameCommand;
