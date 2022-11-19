const { ERROR_MESSAGE, GAME_NUMBER } = require('./utils/Constants');

class Validation {
  static checkBridgeLength(bridgeLen) {
    
    if (Validation.isEmpty(bridgeLen)) {
      throw new Error(ERROR_MESSAGE.form);
    }

    if (Validation.isNumber(bridgeLen)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }

    if (Validation.isInRange(bridgeLen)) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }

  static isEmpty(input) {
    return input.length === 0;
  }

  static isNumber(input ) {
    return isNaN(input);
  }

  static isInRange(input) {
    if (input < GAME_NUMBER.min || input > GAME_NUMBER.max) return true;
  }

}


module.exports = Validation;