const ErrorHandler = require("./ErrorHandler.js");

const Validator = {
  isNaturalNumber(sentence) {
    if (isNaN(sentence)) {
      return false;
    }
    const REAL_NUMBER = parseFloat(sentence);
    if (REAL_NUMBER <= 0 || REAL_NUMBER % 1 !== 0) {
      return false;
    }
    return true;
  },

  isBridgeLength(bridgeLength) {
    if (this.isNaturalNumber(bridgeLength) === false || bridgeLength < 21) {
      ErrorHandler.inputError("bridge");
    }
    return true;
  },

  isMoveDirection(moveDirection) {
    if (moveDirection === "U" || moveDirection === "D") {
      return true;
    }
    ErrorHandler.inputError("jump");
  },

  isBoolNumber(number) {
    if (number !== "0" && number !== "1") {
      ErrorHandler.computeError();
    }
  },
};

module.exports = Validator;
