const { BRIDGE_INFO } = require('../constants/BridgeGameSetting');
const MESSAGE = require('../constants/BridgeGameMessage');

class Validator {
  static validateInput(data) {
    if (!Validator.isRange(data))
      throw new Error(MESSAGE.ERROR.INCORRECT_BRIDGE_LENGTH);
  }

  static isRange(number) {
    return number >= BRIDGE_INFO.MIN_LENGTH && number <= BRIDGE_INFO.MAX_LENGTH;
  }
}

module.exports = Validator;
