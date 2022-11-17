const { ERROR_MESSAGE } = require("./constants/Messages");

const Validation = {
  bridgeInput: (input) => {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.BRIDGE_ERROR);
    } else if (input < 3 || input > 20) {
      throw new Error(ERROR_MESSAGE.BRIDGE_ERROR);
    }
  },
  stepInput: (input) => {
    if (!(input === "U" || input === "D")) {
      throw new Error(ERROR_MESSAGE.STEP_ERROR);
    }
  },
  restartInput: (input) => {
    if (!(input === "R" || input === "Q")) {
      throw new Error(ERROR_MESSAGE.STEP_ERROR);
    }
  },
};

module.exports = Validation;
