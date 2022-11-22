const { ERROR_MESSAGES } = require("../Constants/Constants");

class BridgeSizeCheck {
  constructor(userInput) {
    this.userInput = userInput;
    this.checkInputType(userInput);
    this.checkValidLength(userInput);
  }

  checkInputType(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error(ERROR_MESSAGES.INVALID_TYPE);
    }
  }

  checkValidLength(userInput) {
    if (Number(userInput) < 3 || Number(userInput) > 20) {
      throw new Error(ERROR_MESSAGES.INVALID_SIZE);
    }
  }
}

module.exports = BridgeSizeCheck;
