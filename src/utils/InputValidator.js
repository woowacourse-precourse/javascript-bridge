const { ERROR_MESSAGE } = require('../constants');

const InputValidator = {
  validateEmpty(input) {
    if (input === '') {
      throw ERROR_MESSAGE.EMPTY;
    }
  },

  validateSpace(input) {
    if (input.includes(' ')) {
      throw ERROR_MESSAGE.SPACE;
    }
  },

  validateNumber(input) {
    if (isNaN(input)) {
      throw ERROR_MESSAGE.NOT_NUMBER;
    }
  },
};

module.exports = InputValidator;
