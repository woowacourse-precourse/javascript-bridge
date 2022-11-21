const { BRIDGE_INFO } = require('../constants/BridgeGameSetting');
const MESSAGE = require('../constants/BridgeGameMessage');

class Validator {
  static throwErr(result, msg) {
    if (!result) {
      throw new Error(msg);
    }
  }

  static isCorrectLength(number) {
    const result =
      number >= BRIDGE_INFO.MIN_LENGTH && number <= BRIDGE_INFO.MAX_LENGTH;
    Validator.throwErr(result, MESSAGE.ERROR.INCORRECT_BRIDGE_LENGTH);
  }

  static isCorrectSelect(input) {
    const result =
      input === BRIDGE_INFO.SELECT_UP || input === BRIDGE_INFO.SELECT_DOWN;
    Validator.throwErr(result, MESSAGE.ERROR.INCORRECT_BRIDGE_SELECT);
  }
}

module.exports = Validator;
