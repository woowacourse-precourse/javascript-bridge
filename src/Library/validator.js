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
    const BRIDGE_LENGTH = parseInt(bridgeLength);

    if (this.isNaturalNumber(bridgeLength) === false) {
      ErrorHandler.inputError("bridge");
    }
    if (BRIDGE_LENGTH > 20 || BRIDGE_LENGTH < 3) {
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
    if (number !== 0 && number !== 1) {
      ErrorHandler.computeError();
    }
  },

  isQuit(rq) {
    if (rq === "R" || rq === "Q") {
      return true;
    }
    ErrorHandler.inputError("quit");
  },
};

module.exports = Validator;
