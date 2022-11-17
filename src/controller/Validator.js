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

  checkStringIncludes(string) {
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

  checkArrayType(array) {
    if (!Array.isArray(array)) {
      throw new Error(MESSAGE_ERROR.INVALID_TYPE);
    }
  },

  checkBridgeSize(bridge) {
    if (bridge.length < 3 || bridge.length > 20) {
      throw new Error(MESSAGE_ERROR.INVALID_RANGE);
    }
  },

  checkBridgeIncludes(bridge) {
    if (!bridge.every(value => value === 'U' || value === 'D')) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },
};

module.exports = Validator;
