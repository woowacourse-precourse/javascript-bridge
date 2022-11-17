const { LETTER, ERROR_MESSAGE } = require("./constant");
const { Console } = require("@woowacourse/mission-utils");

const Validation = {
  checkBridgeNumber(number) {
    if (number < 3 || number > 20 || !Number.isInteger(number)) {
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
