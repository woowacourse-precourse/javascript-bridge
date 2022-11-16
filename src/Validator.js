const { BRIDGE, ERROR } = require("./constants");

const Validator = {
  isValidBridgeSize(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.BRIDGE_LENGTH_TYPE);
    }
    if (input < BRIDGE.LENGTH_MIN || input > BRIDGE.LENGTH_MAX) {
      throw new Error(ERROR.BRIDGE_LENGTH_RANGE);
    }
    return true;
  },
};

module.exports = Validator;
