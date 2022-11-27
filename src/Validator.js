const { BRIDGE_CONSTANTS, GAME_CONSTANTS } = require('./utils/constants');
const ERROR_MESSAGE = require('./utils/ErrorMessage');
const handleError = require('./utils/handleError');

class Validator {
  static #validate(condition, errorMsg) {
    if (condition) {
      return handleError(errorMsg);
    }
    return true;
  }

  static validatorBridgeLength(size) {
    return Validator.isBridgeLengthInRange(size) && Validator.isNumeric(size);
  }

  static isBridgeLengthInRange(size) {
    return this.#validate(
      this.#isBridgeLengthMinimum(size) || this.#isBridgeLengthMaximum(size),
      ERROR_MESSAGE.bridgeLengthRange,
    );
  }

  static isNumeric(value) {
    return this.#validate(!/^-?\d+$/.test(value), ERROR_MESSAGE.bridgeLengthRange);
  }

  static checkStep(step) {
    return this.#validate(
      ![GAME_CONSTANTS.upStair, GAME_CONSTANTS.downStair].includes(step),
      ERROR_MESSAGE.checkStepCorrect,
    );
  }

  static checkRetry(retry) {
    return this.#validate(
      ![GAME_CONSTANTS.retryGame, GAME_CONSTANTS.quitGame].includes(retry),
      ERROR_MESSAGE.checkRetryCorrect,
    );
  }

  static #isBridgeLengthMinimum(size) {
    return size < BRIDGE_CONSTANTS.minimum;
  }

  static #isBridgeLengthMaximum(size) {
    return BRIDGE_CONSTANTS.maximum < size;
  }
}

module.exports = Validator;
