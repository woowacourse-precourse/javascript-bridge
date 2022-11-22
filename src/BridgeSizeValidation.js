const {
  BRIDGE_SIZE_START,
  BRIDGE_SIZE_END,
  ERROR_NOT_NUMBER,
  ERROR_OUT_OF_RANGE,
  ERROR_NOT_INTEGER,
} = require("./Utils");

const BridgeSizeValidation = {
  validateIsNumber(number) {
    if ((number === "") | isNaN(number)) throw new Error(ERROR_NOT_NUMBER);
  },

  validateIsInRange(number) {
    if ((number < BRIDGE_SIZE_START) | (number > BRIDGE_SIZE_END))
      throw new Error(ERROR_OUT_OF_RANGE);
  },

  validateIsInteger(number) {
    if (!Number.isInteger(number)) throw new Error(ERROR_NOT_INTEGER);
  },

  validateBridgeSize(size) {
    this.validateIsNumber(size);
    this.validateIsInteger(size);
    this.validateIsInRange(size);
  },
};

module.exports = BridgeSizeValidation;
