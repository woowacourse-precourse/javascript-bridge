const { ERROR_MESSAGES } = require('../Constants/Constants');

class RetryQuitCheck {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
    this.checkInputChar(userInput);
  }

  checkInputChar(userInput) {
    if (!userInput.match(/^[RQ]$/)) {
        throw new Error(ERROR_MESSAGES.INVALID_CHAR_RQ);
    }
  }
}

// InputCheckTest.js 에서 검증하기!
module.exports = RetryQuitCheck;