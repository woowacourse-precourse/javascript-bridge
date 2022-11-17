const { BRIDGE_REQUIREMENTS, MESSAGES, USER_INPUT_CODE } = require('../constants');

class Validator {
  static bridgeSizeCheck(value) {
    Validator.#isNotRangeSize(value);
    Validator.#isDemical(value);
  }
  static restartCheck(value) {
    const validValues = [USER_INPUT_CODE.RESTART.AGREE, USER_INPUT_CODE.RESTART.QUIT];
    if(!validValues.includes(value)) throw MESSAGES.ERROR.INVALID_RESTART;
  }
  static directionCheck(value) {
    const spaceType = [USER_INPUT_CODE.MOVE.UPPER, USER_INPUT_CODE.MOVE.LOWER];
    if(!spaceType.includes(value)) throw MESSAGES.ERROR.INVALID_DIRECTION;
  }
  static #isNotRangeSize(value) {
    if(value < BRIDGE_REQUIREMENTS.MIN_SIZE || value > BRIDGE_REQUIREMENTS.MAX_SIZE) throw MESSAGES.ERROR.INVALID_BRIDGE_SIZE;
  }
  static #isDemical(value) {
    if(value % 1 !== 0) throw MESSAGES.ERROR.IS_DEMICAL;
  }
}

module.exports = Validator;