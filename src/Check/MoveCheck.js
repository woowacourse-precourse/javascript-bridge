const { ERROR_MESSAGES } = require("../Constants/Constants");

class MoveCheck {
  constructor(userInput) {
    this.userInput = userInput;
    this.checkInputChar(userInput);
  }

  checkInputChar(userInput) {
    if (!userInput.match(/^[UD]$/)) {
      throw new Error(ERROR_MESSAGES.INVALID_CHAR_UD);
    }
  }
}

// InputCheckTest.js 에서 검증하기!
module.exports = MoveCheck;
