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
  isValidMoving(input) {
    if (input !== 'D' && input !== 'U') {
      throw new Error(ERROR.BRIDGE_MOVING);
    }
    return true;
  },
};

module.exports = Validator;
