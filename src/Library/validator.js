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

  isBridgeLength(callback, bridgeLength) {
    const BRIDGE_LENGTH = parseInt(bridgeLength);

    if (this.isNaturalNumber(bridgeLength) === false) {
      ErrorHandler.tryCatch(callback, "bridge");
    }
    if (BRIDGE_LENGTH > 20 || BRIDGE_LENGTH < 3) {
      ErrorHandler.tryCatch(callback, "bridge");
    }
    return true;
  },

  isMoveDirection(callback, moveDirection) {
    if (moveDirection === "U" || moveDirection === "D") {
      return true;
    }
    ErrorHandler.tryCatch(callback, "jump");
  },

  isBoolNumber(callback, number) {
    if (number !== 0 && number !== 1) {
      ErrorHandler.tryCatch(callback, "compute");
    }
  },

  isQuit(callback, rq) {
    if (rq === "R" || rq === "Q") {
      return true;
    }
    ErrorHandler.tryCatch(callback, "quit");
  },
};

module.exports = Validator;
