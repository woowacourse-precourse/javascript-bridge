const { ERROR } = require("./data/Constants");

const Validation = {
  checkBridgeLength(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error(ERROR.ERROR_BRIDGE_LENGTH_RANGE);
    }
    if (/^[0-9]*$/g.test(userInput) === false) {
      throw new Error(ERROR.ERROR_BRIDGE_LENGTH_ONLY_NUM);
    }
  },

  checkMove(userInput) {
    if (userInput === "u" || userInput === "d") {
      throw new Error(ERROR.ERROR_BRIDGE_MOVE_UPPERCASE);
    }

    if (/^[U,D]/.test(userInput) === false) {
      throw new Error(ERROR.ERROR_BRIDGE_MOVE_RANGE);
    }
    if (userInput.length !== 1) {
      throw new Error(ERROR.ERROR_BRIDGE_MOVE_LENGTH);
    }
  },

  checkRetry(userInput) {
    if (userInput === "r" || userInput === "q") {
      throw new Error(ERROR.ERROR_RETRY_UPPERCASE);
    }

    if (/^[R,Q]/.test(userInput) === false) {
      throw new Error(ERROR.ERROR_RETRY_RANGE);
    }
    if (userInput.length !== 1) {
      throw new Error(ERROR.ERROR_RETRY_LENGTH);
    }
  },
};
module.exports = Validation;
