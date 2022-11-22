const {
  GAME_COMMAND_RETRY,
  GAME_COMMAND_QUIT,
  ERROR_NOT_UPPER_CASE,
  ERROR_UNEXPECTED_GAME_COMMAND,
} = require("./Utils");

const GameCommandValidation = {
  validateIsUpperCase(string) {
    if (["r", "q"].includes(string)) throw new Error(ERROR_NOT_UPPER_CASE);
  },

  validateIsExpected(string) {
    if (![GAME_COMMAND_RETRY, GAME_COMMAND_QUIT].includes(string))
      throw new Error(ERROR_UNEXPECTED_GAME_COMMAND);
  },

  validateGameCommand(string) {
    this.validateIsUpperCase(string);
    this.validateIsExpected(string);
  },
};

module.exports = GameCommandValidation;
