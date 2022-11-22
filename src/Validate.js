const Constant = require('./Constant');
const Message = require('./Message');

const Validate = {
  validateBridgeSize(length) {
    if (length < Constant.BRIDGE_LENGTH_MIN_RANGE || length > Constant.BRIDGE_LENGTH_MAX_RANGE) {
      throw Message.ERROR.bridgeLengthRange;
    }

    if (isNaN(length)) {
      throw Message.ERROR.bridgeLengthNaN;
    }
  },

  validateMoving(word) {
    if (!(word === Constant.UPPER_ALPHABET || word === Constant.LOWER_ALPHABET)) {
      throw Message.ERROR.invalidMovingValue;
    }
  },

  validateSelectEndInput(word) {
    if (!(word === Constant.RESTART_ALPHABET || word === Constant.END_ALPHABET)) {
      throw Message.ERROR.invalidEndValue;
    }
  },
};

module.exports = Validate;
