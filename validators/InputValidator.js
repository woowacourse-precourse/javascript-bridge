const { INPUT_ERROR } = require('../constants/error.constants');

class InputValidator {
  static isBlank (string) {
    if (string === '') throw new Error(INPUT_ERROR.IS_NOT_BLANK);
  }

}

module.exports = InputValidator;
