const { ERROR_MESSAGES } = require("../constants/constant");

class ValidateBridgeSize {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = Number(answer);
  }

  validate(answer) {
    if (Number.isNaN(answer) === true) {
      throw new Error(ERROR_MESSAGES.bridgeSize);
    }
    if (answer % 1 !== 0) {
      throw new Error(ERROR_MESSAGES.bridgeSize);
    }
    if (answer < 3 || answer > 20) {
      throw new Error(EERROR_MESSAGES.bridgeSize);
    }
  }

  getSize() {
    return this.#answer;
  }
}

module.exports = ValidateBridgeSize;
