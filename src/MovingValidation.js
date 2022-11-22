const {
  BRIDGE_UP,
  BRIDGE_DOWN,
  ERROR_NOT_UPPER_CASE,
  ERROR_UNEXPECTED_MOVING,
} = require("./Utils");

const MovingValidation = {
  validateIsUpperCase(string) {
    if (["u", "d"].includes(string)) throw new Error(ERROR_NOT_UPPER_CASE);
  },

  validateIsExpected(string) {
    if (![BRIDGE_UP, BRIDGE_DOWN].includes(string))
      throw new Error(ERROR_UNEXPECTED_MOVING);
  },

  validateMoving(string) {
    this.validateIsUpperCase(string);
    this.validateIsExpected(string);
  },
};

module.exports = MovingValidation;
