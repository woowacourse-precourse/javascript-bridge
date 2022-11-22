const { ERROR_MESSAGES } = require("./Constants");
const Validate = {
  checkSizeInputType(inputNumber) {
    if (Number.isNaN(Number(inputNumber))) {
      throw new Error(ERROR_MESSAGES.SIZE_INPUT_TYPE);
    }
  },

  checkSizeInputRange(inputNumber) {
    if (Number(inputNumber) < 3 || Number(inputNumber) > 20) {
      throw new Error(ERROR_MESSAGES.SIZE_INPUT_RANGE);
    }
  },

  checkDirectionInputType(inputDirection) {
    if (inputDirection !== "U" && inputDirection !== "D") {
      throw new Error(ERROR_MESSAGES.DIRECTION_INPUT_TYPE);
    }
  },

  checkRetryCommandType(inputOpinion) {
    if (inputOpinion !== "R" && inputOpinion !== "Q") {
      throw new Error(ERROR_MESSAGES.RETRY_COMMAND_TYPE);
    }
  },
};

module.exports = Validate;
