const { LETTER, ERROR_MESSAGE } = require("./constant");
const { Console } = require("@woowacourse/mission-utils");

const Validation = {
  checkBridgeNumber(number) {
    if (number < 3 || number > 20 || !Number.isInteger(number)) {
      Console.print(ERROR_MESSAGE.notInRange);
      return false;
    }
    return true;
  },

  checkUorD(letter) {
    if (letter !== LETTER.up && letter !== LETTER.down) {
      Console.print(ERROR_MESSAGE.notUorD);
      return false;
    }
    return true;
  },

  checkRorQ(letter) {
    if (letter !== LETTER.retry && letter !== LETTER.quit) {
      Console.print(ERROR_MESSAGE.notRorQ);
      return false;
    }
    return true;
  },
};

module.exports = Validation;
