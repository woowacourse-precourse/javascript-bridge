const { INPUT_ERROR } = require('../constants/error.constants');

class InputValidator {
  static isBlank (string) {
    if (string === '') throw new Error(INPUT_ERROR.IS_NOT_BLANK);
  }

  static isNumber (string) {
    if (isNaN(string)) throw new Error(INPUT_ERROR.IS_NOT_NUMBER);
  }

}

module.exports = InputValidator;
