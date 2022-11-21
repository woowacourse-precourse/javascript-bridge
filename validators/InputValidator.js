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

  static isUpDown (string) {
    this.isBlank(string);
    if (string !== 'U' && string !== 'D') throw new Error(INPUT_ERROR.MOVE_INPUT_IS_U_OR_D);
  }

  static isRestartQuit (string) {
    this.isBlank(string);
    if (string !== 'R' && string !== 'Q') throw new Error(INPUT_ERROR.GAME_RESTART_IS_R_OR_Q);
  }

}

module.exports = InputValidator;
