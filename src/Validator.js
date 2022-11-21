const { BRIDGE_SIZE_RANGE, UP, DOWN, RETRY, QUIT } = require('./constants');

class Validator {
  static validateNumber(value) {
    const regExp = /[0-9]/;
    const matchArr = value.match(regExp);
    if (!matchArr || matchArr.length !== value.length) {
      return false;
    }
    return true;
  }

  static validateNumberInRange(value) {
    const num = parseInt(value, 10);
    if (num > BRIDGE_SIZE_RANGE.MAX || num < BRIDGE_SIZE_RANGE.MIN) {
      return false;
    }
    return true;
  }

  static validateUpDown(value) {
    if (value !== UP && value !== DOWN) {
      return false;
    }
    return true;
  }

  static validateGameCommand(value) {
    if (value !== RETRY && value !== QUIT) {
      return false;
    }
    return true;
  }
}

module.exports = Validator;
