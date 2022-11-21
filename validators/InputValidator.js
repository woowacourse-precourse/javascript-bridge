const { INPUT_ERROR } = require('../constants/error.constants');

class InputValidator {
  static isBlank (string) {
    if (string === '') throw new Error(INPUT_ERROR.IS_NOT_BLANK);
  }

  static isNumber (string) {
    if (isNaN(string)) throw new Error(INPUT_ERROR.IS_NOT_NUMBER);
  }

  static isRightRange (number) {
    if (3 <= number && number <= 20) {
      return true;
    }
    throw new Error(INPUT_ERROR.IS_NOT_IN_RANGE);
  }

  static isRightBridgeLength (string) {
    this.isBlank(string);
    this.isNumber(string);
    this.isRightRange(string);
  }

}

module.exports = InputValidator;
