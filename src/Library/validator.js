const ErrorHandler = require("./ErrorHandler.js");

const Validator = {
  IsNaturalNumber(sentence) {
    if (isNaN(sentence)) {
      return false;
    }
    const REAL_NUMBER = parseFloat(sentence);
    if (REAL_NUMBER <= 0 || REAL_NUMBER % 1 !== 0) {
      return false;
    }
    return true;
  },

  IsBridgeLength(bridgeLength) {
    if (IsNaturalNumber(bridgeLength) === false || bridgeLength < 21) {
      ErrorHandler.inputError("bridge");
    }
    return true;
  },
};

module.exports = Validator;
