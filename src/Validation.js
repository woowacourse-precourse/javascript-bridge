const { REGEX, ERROR } = require('./constants');

const Validation = {
  validateBridgeSize(inputStr) {
    if (!REGEX.BRIDGE_SIZE.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_BRIDGE_SIZE);
    }

    return parseInt(inputStr);
  },
};

module.exports = Validation;
