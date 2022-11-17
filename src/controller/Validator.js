const { MESSAGE_ERROR } = require('../constants/messages');
const { REG_EXP } = require('../constants/values');

const Validator = {
  checkTruthy(truthy) {
    if (!truthy) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkStringType(string) {
    if (typeof string !== 'string') {
      throw new Error(MESSAGE_ERROR.INVALID_TYPE);
    }
  },

  checkStringIncludesNumbers(string) {
    if (!REG_EXP.ONLY_NUMBERS.test(string)) {
      throw new Error(MESSAGE_ERROR.INVALID_FORMAT);
    }
  },

  checkNumberType(number) {
    if (typeof number !== 'number') {
      throw new Error(MESSAGE_ERROR.INVALID_TYPE);
    }
  },

  checkBridgeSizeRange(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(MESSAGE_ERROR.INVALID_RANGE);
    }
  },
};

module.exports = Validator;
