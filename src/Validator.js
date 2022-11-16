const { BRIDGE, ERROR } = require("./constants");

const Validator = {
  isValidBridgeSize(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.BRIDGE_SIZE_TYPE);
    }
    if (input < BRIDGE.SIZE_MIN || input > BRIDGE.SIZE_MAX) {
      throw new Error(ERROR.BRIDGE_SIZE_RANGE);
    }
    return true;
  },
};

module.exports = Validator;
