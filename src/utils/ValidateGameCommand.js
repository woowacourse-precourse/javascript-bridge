const { ERROR_MESSAGES, RETRY_VALID } = require("../constants/constant");

class ValidateGameCommand {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    if (!RETRY_VALID.includes(answer)) {
      throw new Error(ERROR_MESSAGES.gameCommand);
    }
  }

  getRetry() {
    return this.#answer;
  }
}

module.exports = ValidateGameCommand;
