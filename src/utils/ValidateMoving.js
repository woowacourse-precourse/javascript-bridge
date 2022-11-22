const { ERROR_MESSAGES, MOVE_VALID } = require("../constants/constant");

class ValidateMoving {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    if (!MOVE_VALID.includes(answer)) {
      throw new Error(ERROR_MESSAGES.moving);
    }
  }

  getMove() {
    return this.#answer;
  }
}

module.exports = ValidateMoving;
