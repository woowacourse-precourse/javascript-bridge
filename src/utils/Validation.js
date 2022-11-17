const { ERROR_MESSAGE, BRIDGE_DETAIL } = require("../constant/Constant");

const Validation = {
  isNumber(userInput) {
    if (isNaN(userInput)) throw new Error(ERROR_MESSAGE.IS_NAN);
    if (!/^[1-9][0-9]*$/.test(userInput)) {
      throw new Error(ERROR_MESSAGE.IS_NATURAL_NUMBER);
    }
  },

  isBridgeLength(userInput) {
    if (userInput < 3 || userInput > 20)
      throw new Error(ERROR_MESSAGE.IS_BRIDGE_LENGTH);
  },

  isBridgeWords(userInput) {
    if (
      userInput !== BRIDGE_DETAIL.UP.COMMAND ||
      userInput !== BRIDGE_DETAIL.DOWN.COMMAND
    )
      throw new Error(ERROR_MESSAGE.IS_BRIDGE_WORDS);
  },

  isRetryWords(userInput) {
    if (
      userInput !== BRIDGE_DETAIL.RETRY_COMMAND ||
      userInput !== BRIDGE_DETAIL.END_COMMAND
    )
      throw new Error(ERROR_MESSAGE.IS_RETRY_WORDS);
  },
};

module.exports = Validation;
