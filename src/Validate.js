const Constant = require('./Constant');
const Message = require('./Message');

const Validate = {
  validateBridgeSize(length) {
    if (length < Constant.BRIDGE_LENGTH_MIN_RANGE || length > Constant.BRIDGE_LENGTH_MAX_RANGE) {
      throw new Error(Message.ERROR.bridgeLengthRange);
    }

    if (isNaN(length)) {
      throw new Error(Message.ERROR.bridgeLengthNaN);
    }
  },

  validateMoving(word) {
    if (!(word === Constant.UPPER_ALPHABET || word === Constant.LOWER_ALPHABET)) {
      throw new Error(Message.ERROR.invalidMovingValue);
    }
  },

  validateSelectEndInput(word) {
    if (!(word === Constant.RESTART_ALPHABET || word === Constant.END_ALPHABET)) {
      throw new Error(Message.ERROR.invalidEndValue);
    }
  },
};

module.exports = Validate;
