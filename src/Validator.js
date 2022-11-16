const { BRIDGE, ERROR } = require("./constants");

const Validator = {
  isNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.BRIDGE_LENGTH_TYPE);
    }
    return true;
  },

  isInRange(input) {
    if (input < BRIDGE.LENGTH_MIN || input > BRIDGE.LENGTH_MAX) {
      throw new Error(ERROR.BRIDGE_LENGTH_RANGE);
    }
    return true;
  },

};

module.exports = Validator;