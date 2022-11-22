const { ERROR_MESSAGE, GAME_NUMBER, GAME_COMMAND } = require('./utils/Constants');

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

  static checkSpace(space) {
    if (Validation.isValidSpace(space)) {
      throw new Error(ERROR_MESSAGE.upDown);
    }
  }

  static checkRetryCommand(command) {
    if (Validation.isValidRetryCommand(command)) {
      throw new Error(ERROR_MESSAGE.retryQuit);
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

  static isValidSpace(input) {
    const spaceArr = [GAME_COMMAND.up, GAME_COMMAND.down];
    if (spaceArr.includes(input) === false) return true;
  }

  static isValidRetryCommand(input) {
    const retryCommandArr = [GAME_COMMAND.retry, GAME_COMMAND.quit];
    if (retryCommandArr.includes(input) === false) return true;
  }
}


module.exports = Validation;