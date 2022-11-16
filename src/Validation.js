const { LETTER, ERROR_MESSAGE } = require("./constant");

const Validation = {
  checkBridgeNumber(number) {
    if (number < 3 || number > 20 || !Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.notInRange);
    }
  },

  checkUorD(letter) {
    if (letter !== LETTER.up && letter !== LETTER.down) {
      throw new Error(ERROR_MESSAGE.notUorD);
    }
  },

  checkRorQ(letter) {
    if (letter !== LETTER.retry && letter !== LETTER.quit) {
      throw new Error(ERROR_MESSAGE.notRorQ);
    }
  },
};

module.exports = Validation;
