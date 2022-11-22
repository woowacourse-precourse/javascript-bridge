const { BRIDGE_REQUIREMENTS, MESSAGES, USER_INPUT_CODE } = require('../constants');

class Validator {
  static bridgeSizeCheck(value) {
    Validator.#isNotNumber(value);
    Validator.#isNotRangeSize(value);
    Validator.#isDemical(value);
  }

  static retryCheck(value) {
    const validValues = [USER_INPUT_CODE.RETRY.AGREE, USER_INPUT_CODE.RETRY.QUIT];
    Validator.#isLowerCase(value);
    if(!validValues.includes(value)) throw MESSAGES.ERROR.INVALID_RETRY;
  }

  static directionCheck(value) {
    const spaceType = [USER_INPUT_CODE.MOVE.UPPER, USER_INPUT_CODE.MOVE.LOWER];
    Validator.#isLowerCase(value);
    if(!spaceType.includes(value)) throw MESSAGES.ERROR.INVALID_DIRECTION;
  }

  static #isLowerCase(value) {
    if(value.toUpperCase() !== value) throw MESSAGES.ERROR.IS_LOWERCASE;
  }

  static #isNotNumber(value) {
    if(isNaN(Number(value))) throw MESSAGES.ERROR.IS_NOT_NUMBER;
  }

  static #isNotRangeSize(value) {
    if(value < BRIDGE_REQUIREMENTS.MIN_SIZE || value > BRIDGE_REQUIREMENTS.MAX_SIZE) throw MESSAGES.ERROR.INVALID_BRIDGE_SIZE;
  }

  static #isDemical(value) {
    if(value % 1 !== 0) throw MESSAGES.ERROR.IS_DEMICAL;
  }
}

module.exports = Validator;