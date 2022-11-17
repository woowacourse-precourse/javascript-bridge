const { ERROR_MESSAGE } = require("./constants/Messages");

const Validation = {
  bridgeInput: (input) => {
    input = Number(input);
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.BRIDGE_ERROR);
    } else if (input < 3 || input > 20) {
      throw new Error(ERROR_MESSAGE.BRIDGE_ERROR);
    }
  },
};

module.exports = Validation;
