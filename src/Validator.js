const { BRIDGE_CONSTANTS, GAME_CONSTANTS } = require('./utils/constants');
const ERROR_MESSAGE = require('./utils/ErrorMessage');

class Validator {
  static isBridgeLengthInRange (size) {
    if (this.isBridgeLengthMinimum(size)  || this.isBridgeLengthMaximum(size)) {
      throw new Error(ERROR_MESSAGE.bridgeLengthRange);
    }
    return true;
  }

  static isNumeric (value) {
    if (!/^-?\d+$/.test(value)) {
      throw new Error(ERROR_MESSAGE.bridgeLengthRange);
    }
    return true;
  }

  static checkStep (step) {
    if (![GAME_CONSTANTS.upStair, GAME_CONSTANTS.downStair].includes(step)) {
      throw new Error(ERROR_MESSAGE.checkStepCorrect);
    }
    return true;
  }

  static checkRetry (retry) {
    if (![GAME_CONSTANTS.retryGame, GAME_CONSTANTS.quitGame].includes(retry)) {
      throw new Error(ERROR_MESSAGE.checkRetryCorrect);
    }
    return true;
  }

  static isBridgeLengthMinimum (size) {
    return size < BRIDGE_CONSTANTS.minimum;
  }

  static isBridgeLengthMaximum (size) {
    return BRIDGE_CONSTANTS.maximum < size;
  }
}

module.exports = Validator;
