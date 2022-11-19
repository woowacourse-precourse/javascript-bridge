const { LETTER, ERROR_MESSAGE, NUMBER_RANGE } = require("./constant");

const Validation = {
  checkBridgeNumber(number) {
    if (
      number < NUMBER_RANGE.min ||
      number > NUMBER_RANGE.max ||
      !Number.isInteger(number)
    ) {
      throw ERROR_MESSAGE.notInRange;
    }
  },

  checkUorD(letter) {
    if (letter !== LETTER.up && letter !== LETTER.down) {
      throw ERROR_MESSAGE.notUorD;
    }
  },

  checkRorQ(letter) {
    if (letter !== LETTER.retry && letter !== LETTER.quit) {
      throw ERROR_MESSAGE.notRorQ;
    }
  },
};

module.exports = Validation;
