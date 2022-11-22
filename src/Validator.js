const ERROR = require("./util/Error");

const Validator = {
  isNotANumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.IS_NOT_A_NUMBER);
      return true;
    }
    return false;
  },

  isRangeIn(start, end, input) {
    if (start > input || input > end) {
      throw new Error(ERROR.IS_NOT_RANGE_IN);
      return false;
    }
    return true;
  },

  isMoveInputValidate(input) {
    if (input !== "U" && input !== "D") {
      throw new Error(ERROR.IS_NOT_VALID_MOVE);
      return false;
    }
    return true;
  },

  isRestartInputValidate(input) {
    if (input !== "R" || input !== "Q") {
      throw new Error(ERROR.IS_NOT_VALID_RESTART);
      return false;
    }
    return true;
  },
};

module.exports = Validator;
