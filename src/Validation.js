const {
  DOWNSIDE_SYMBOL,
  UPSIDE_SYMBOL,
  QUIT_COMMAND,
  RESTART_COMMAND,
} = require('./constants/condition.js');
const { ERROR_MSG } = require('./constants/message.js');

class Validation {
  static validateDirection(direction) {
    if (!this.#isValidDirectionSymbol(direction)) {
      throw new Error(ERROR_MSG.invalidDirection);
    }
  }

  static #isValidDirectionSymbol(direction) {
    return direction === DOWNSIDE_SYMBOL || direction === UPSIDE_SYMBOL;
  }

  static validateGameCommand(gameCommand) {
    if (!this.#isValidCommand(gameCommand)) {
      throw new Error(ERROR_MSG.inValidCommand);
    }
  }

  static #isValidCommand(gameCommand) {
    return gameCommand === QUIT_COMMAND || gameCommand === RESTART_COMMAND;
  }
}

module.exports = Validation;
