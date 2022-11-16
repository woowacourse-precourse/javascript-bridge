const { MESSAGES, BRIDGE_REQUIREMENTS } = require('../constants');

class Validator {
  static bridgeSizeCheck(value) {
    Validator.#isNotRangeSize(value);
    Validator.#isDemical(value);
  }
  static #isNotRangeSize(value) {
    if(value < BRIDGE_REQUIREMENTS.MIN_SIZE || value > BRIDGE_REQUIREMENTS.MAX_SIZE) throw MESSAGES.ERROR.INVALID_BRIDGE_SIZE;
  }
  static #isDemical(value) {
    if(value % 1 !== 0) throw MESSAGES.ERROR.IS_DEMICAL;
  }
}

module.exports = Validator;