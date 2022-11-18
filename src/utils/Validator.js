const { MESSAGE_ERROR } = require('../constants/messages');
const { REG_EXP } = require('../constants/values');
const { BRIDGE_GAME } = require('../constants/values');
const Console = require('./Console');

const Validator = {
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,

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

  checkRowDataOfBridgeSizeIncludes(rowDataOfBridgeSize) {
    if (!REG_EXP.ONLY_NUMBERS.test(rowDataOfBridgeSize)) {
      throw new Error(MESSAGE_ERROR.INVALID_FORMAT);
    }
  },

  checkNumberType(number) {
    if (typeof number !== 'number') {
      throw new Error(MESSAGE_ERROR.INVALID_TYPE);
    }
  },

  checkBridgeSizeRange(bridgeSize) {
    if (bridgeSize < this.MIN_BRIDGE_SIZE || bridgeSize > this.MAX_BRIDGE_SIZE) {
      throw new Error(MESSAGE_ERROR.INVALID_RANGE);
    }
  },

  checkArrayType(array) {
    if (!Array.isArray(array)) {
      throw new Error(MESSAGE_ERROR.INVALID_TYPE);
    }
  },

  checkBridgeSize(bridge) {
    if (bridge.length < this.MIN_BRIDGE_SIZE || bridge.length > this.MAX_BRIDGE_SIZE) {
      throw new Error(MESSAGE_ERROR.INVALID_RANGE);
    }
  },

  checkBridgeIncludes(bridge) {
    if (!bridge.every(value => value === BRIDGE_GAME.INPUT_U || value === BRIDGE_GAME.INPUT_D)) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkPlayerInputLength(input) {
    if (input.length !== 1) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkDirectionIncludes(direction) {
    if (direction !== BRIDGE_GAME.INPUT_U && direction !== BRIDGE_GAME.INPUT_D) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkSelectIncludes(select) {
    if (select !== BRIDGE_GAME.RESTART && select !== BRIDGE_GAME.QUIT) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },
};

module.exports = Validator;
