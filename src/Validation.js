const { ERROR_MSG } = require("./constants");

const Validation = {
  ValidCmd(cmd) {
    if (cmd != "R" && cmd != "Q") {
      throw new Error(ERROR_MSG.INPUT_RETRY_ERROR);
    }
  },

  ValidMove(move) {
    if (move != "U" && move != "D") {
      throw new Error(ERROR_MSG.INPUT_MOVING_ERROR);
    }
  },

  ValidSize(input) {
    this.CheckNotANumber(input);
    this.CheckInputRange(input);
  },

  CheckNotANumber(input) {
    if (isNaN(input)) {
      console.log(ERROR_MSG.INPUT_ERROR);
    }
  },

  CheckInputRange(input) {
    if (+input < 3 || +input > 20) {
      throw new Error(ERROR_MSG.INPUT_ERROR);
    }
  },
};

module.exports = Validation;
