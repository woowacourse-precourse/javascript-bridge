const Constant = require("./Constant");
const Message = require("./Message");

const ExceptionHandler = {
  isNotaNumber(input) {
    if (isNaN(input)) {
      throw Message.ISNAN_ERROR;
    }
  },

  validateSizeInput(size) {
    const intSize = parseInt(size);
    if (intSize < Constant.MIN_SIZE || intSize > Constant.MAX_SIZE) {
      throw Message.SIZE_RANGE_ERROR;
    }
  },

  validateMoveInput(input) {
    if (input !== Constant.UP && input !== Constant.DOWN) {
      throw Message.MOVE_INPUT_ERROR;
    }
  },

  validateQuitOrRetryInput(input) {
    if (input !== Constant.QUIT && input !== Constant.RETRY) {
      throw Message.QUIT_OR_RETRY_INPUT_ERROR;
    }
  },
};

module.exports = ExceptionHandler;
