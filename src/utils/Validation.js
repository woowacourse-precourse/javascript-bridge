const { ERROR_MESSAGE, BRIDGE_DETAIL } = require("../constant/Constant");

const Validation = {
  isNumber(userInput) {
    if (isNaN(userInput)) throw ERROR_MESSAGE.IS_NAN;
    if (!/^[1-9][0-9]*$/.test(userInput)) throw ERROR_MESSAGE.IS_NATURAL_NUMBER;
  },

  isBridgeLength(userInput) {
    if (userInput < BRIDGE_DETAIL.MIN || userInput > BRIDGE_DETAIL.MAX)
      throw ERROR_MESSAGE.IS_BRIDGE_LENGTH;
  },

  isBridgeWords(userInput) {
    if (
      userInput !== BRIDGE_DETAIL.UP.COMMAND ||
      userInput !== BRIDGE_DETAIL.DOWN.COMMAND
    )
      throw ERROR_MESSAGE.IS_BRIDGE_WORDS;
  },

  isRetryWords(userInput) {
    if (
      userInput !== BRIDGE_DETAIL.RETRY_COMMAND ||
      userInput !== BRIDGE_DETAIL.END_COMMAND
    )
      throw ERROR_MESSAGE.IS_RETRY_WORDS;
  },
};

module.exports = Validation;
