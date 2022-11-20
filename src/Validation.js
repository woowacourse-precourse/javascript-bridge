const {
  DOWNSIDE_SYMBOL,
  UPSIDE_SYMBOL,
  QUIT_TRIGGER,
  RESTART_TRIGGER,
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
    if (!this.#isValidTrigger(gameCommand)) {
      throw new Error(ERROR_MSG.inValidTrigger);
    }
  }

  static #isValidTrigger(gameCommand) {
    return gameCommand === QUIT_TRIGGER || gameCommand === RESTART_TRIGGER;
  }
}

module.exports = Validation;
