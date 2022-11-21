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
    if (!/^U|D/.test(userInput)) throw ERROR_MESSAGE.IS_BRIDGE_WORDS;
  },

  isRetryWords(userInput) {
    if (!/^R|Q/.test(userInput)) throw ERROR_MESSAGE.IS_RETRY_WORDS;
  },
};

module.exports = Validation;
