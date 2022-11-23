const { BRIDGE_SIZE_RANGE, UP, DOWN, RETRY, QUIT, ERROR_MESSAGE } = require('./constants');

class Validator {
  static validateSize(value) {
    this.validateNumber(value);
    this.validateNumberInRange(value);
  }

  static validateNumber(value) {
    const regExp = /[0-9]/;
    const matchArr = value.match(regExp);
    if (!matchArr || matchArr.length !== value.length) {
      throw new Error(ERROR_MESSAGE.SIZE_NUMBER_ERROR);
    }
  }

  static validateNumberInRange(value) {
    const num = parseInt(value, 10);
    if (num > BRIDGE_SIZE_RANGE.MAX || num < BRIDGE_SIZE_RANGE.MIN) {
      throw new Error(ERROR_MESSAGE.SIZE_RANGE_ERROR);
    }
  }

  static validateUpDown(value) {
    if (value !== UP && value !== DOWN) {
      throw new Error(ERROR_MESSAGE.MOVING_ERROR);
    }
  }

  static validateGameCommand(value) {
    if (value !== RETRY && value !== QUIT) {
      throw new Error(ERROR_MESSAGE.COMMAND_ERROR);
    }
  }
}

module.exports = Validator;
