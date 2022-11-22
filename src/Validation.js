const {
  BRIDGE_LENGTH_NOT_NUMBE_ERROR,
  BRIDGE_LENGTH_RANGE_OUT_ERROR,
  MOVE_COMMAND_ELSE_CHAR_ERROR,
  RETRY_COMMAND_ELSE_CHAR_ERROR,
} = require("./Constant");

const Validation = {
  bridgeLengthValidation(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error(BRIDGE_LENGTH_NOT_NUMBE_ERROR);
    }
    if (Number(input) < 3 || Number(input) > 20) {
      throw new Error(BRIDGE_LENGTH_RANGE_OUT_ERROR);
    }
  },

  moveCommandValidation(input) {
    if (input !== "U" && input !== "D") {
      throw new Error(MOVE_COMMAND_ELSE_CHAR_ERROR);
    }
  },

  retryCommandValidation(input) {
    if (input !== "R" && input !== "Q") {
      throw new Error(RETRY_COMMAND_ELSE_CHAR_ERROR);
    }
  },
};

module.exports = Validation;
