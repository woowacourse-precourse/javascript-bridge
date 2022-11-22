const { INPUT_VALUE } = require("./constants/values");
const { ERROR_MESSAGE } = require("./constants/errors");

const Validations = {
  validateSizeIsNumber(size) {
    if (isNaN(size)) {
      throw Error(ERROR_MESSAGE.NAN);
    }
  },

  validateSizeINRange(size) {
    if (size < INPUT_VALUE.MIN_LENGTH || size > INPUT_VALUE.MAX_LENGTH)
      throw Error(ERROR_MESSAGE.NO_IN_RANGE);
  },

  validateUserDirection(answer) {
    if (answer !== INPUT_VALUE.UP && answer !== INPUT_VALUE.DOWN)
      throw Error(ERROR_MESSAGE.INVALID_INPUT_ANSWER);
  },

  validateRetryCorrect(answer) {
    if (answer !== INPUT_VALUE.QUIT && answer !== INPUT_VALUE.RETRY)
      throw Error(ERROR_MESSAGE.INVALID_INPUT_RETRY);
  },
};

module.exports = { Validations };
