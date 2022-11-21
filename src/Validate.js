const Constant = require('./Constant');
const Message = require('./Message');

const Validate = {
  bridgeSizeValidate(length) {
    if (length < Constant.BRIDGE_LENGTH_MIN_RANGE || length > Constant.BRIDGE_LENGTH_MAX_RANGE) {
      throw Message.ERROR.bridgeLengthRange;
    }

    if (isNaN(length)) {
      throw Message.ERROR.bridgeLengthNaN;
    }
  },

}

module.exports = Validate;
