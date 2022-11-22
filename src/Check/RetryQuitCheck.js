const { ERROR_MESSAGES } = require("../Constants/Constants");

class RetryQuitCheck {
  constructor(userInput) {
    this.userInput = userInput;
    this.checkInputChar(userInput);
  }

  checkInputChar(userInput) {
    if (!userInput.match(/^[RQ]$/)) {
      throw new Error(ERROR_MESSAGES.INVALID_CHAR_RQ);
    }
  }
}

module.exports = RetryQuitCheck;
