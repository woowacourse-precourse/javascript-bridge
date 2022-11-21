const { LETTER, ERROR_MESSAGE, NUMBER_RANGE } = require("./constant");

const Validation = {
  validateBridgeNumber(number) {
    if (!Validation.isNumberInRange(number)) {
      throw ERROR_MESSAGE.notInRange;
    }
  },

  isNumberInRange(number) {
    return (
      number >= NUMBER_RANGE.min &&
      number <= NUMBER_RANGE.max &&
      Number.isInteger(number)
    );
  },

  validateMoveInput(letter) {
    if (!Validation.isLetterUorD(letter)) {
      throw ERROR_MESSAGE.notUorD;
    }
  },

  isLetterUorD(letter) {
    return letter === LETTER.up || letter === LETTER.down;
  },

  validateCommandInput(letter) {
    if (!Validation.isLetterRorQ(letter)) {
      throw ERROR_MESSAGE.notRorQ;
    }
  },

  isLetterRorQ(letter) {
    return letter === LETTER.retry || letter === LETTER.quit;
  },
};

module.exports = Validation;
