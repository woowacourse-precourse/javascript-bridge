const { INPUT_ERROR } = require('../constants/error.constants');
const { RANGE, BRIDGE, INPUT_MESSAGE } =require('../constants/game.constants');

class InputValidator {
  static isBlank (string) {
    if (string === '') throw new Error(INPUT_ERROR.IS_NOT_BLANK);
  }

  static isNumber (string) {
    if (Number.isNaN(Number(string))) throw new Error(INPUT_ERROR.IS_NOT_NUMBER);
  }

  static isRightRange (number) {
    if (RANGE.MIN <= number && number <= RANGE.MAX) {
      return true;
    }
    throw new Error(INPUT_ERROR.IS_NOT_IN_RANGE);
  }

  static isNaturalNumber (number) {
    if(Number.isInteger(Number(number))){
      return true;
    } 
    throw new Error(INPUT_ERROR.IS_NOT_NATURAL_NUMBER);
  }

  static isRightBridgeLength (string) {
    this.isBlank(string);
    this.isNumber(string);
    this.isRightRange(string);
    this.isNaturalNumber(string);
  }

  static isUpDown (string) {
    this.isBlank(string);
    if (string !== BRIDGE.UP && string !== BRIDGE.DOWN) throw new Error(INPUT_ERROR.MOVE_INPUT_IS_U_OR_D);
  }

  static isRestartQuit (string) {
    this.isBlank(string);
    if (string !== INPUT_MESSAGE.RETRY && string !== INPUT_MESSAGE.QUIT) throw new Error(INPUT_ERROR.GAME_RESTART_IS_R_OR_Q);
  }

}

module.exports = InputValidator;
