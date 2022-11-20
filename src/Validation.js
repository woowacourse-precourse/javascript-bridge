const {
  DOWNSIDE_SYMBOL,
  UPSIDE_SYMBOL,
  QUIT_COMMAND,
  RESTART_COMMAND,
} = require('./constants/condition.js');
const { ERROR_MSG } = require('./constants/message.js');

class Validation {
  static validateDirection(direction) {
    const directionSymbols = [DOWNSIDE_SYMBOL, UPSIDE_SYMBOL];

    if (!directionSymbols.includes(direction)) {
      throw new Error(ERROR_MSG.invalidDirection);
    }
  }

  static validateGameCommand(gameCommand) {
    const commands = [QUIT_COMMAND, RESTART_COMMAND];

    if (!commands.includes(gameCommand)) {
      throw new Error(ERROR_MSG.inValidCommand);
    }
  }
}

module.exports = Validation;
