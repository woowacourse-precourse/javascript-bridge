const { MOVE, COMMAND } = require("./constants/Constants")
const { ERROR } = require("./constants/MessageConstants")

const Validation = {
  checkBridgeSize(input) {
    if (isNaN(input) === true) {
      throw new Error(ERROR.NOT_NUMBER);
    }

    if (Number.isInteger(Number(input)) === false) {
      throw new Error(ERROR.NOT_INTEGER);
    }
    
    if (input < 3 || 20 < input) {
      throw new Error(ERROR.RANGE_IS_WRONG);
    }
  },

  checkMoving(input) {
    if (!(input === MOVE.UP || input === MOVE.DOWN)) {
      throw new Error(ERROR.PLEASE_INPUT_U_OR_D);
    }
  },

  checkInputRetryOrEnd(input) {
    if (!(input === COMMAND.RETRY || input === COMMAND.QUIT)) {
      throw new Error(ERROR.PLEASE_INPUT_R_OR_Q);
    }
  }
};

module.exports = Validation;
