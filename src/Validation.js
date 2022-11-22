const {
  BRIDGE_LENGTH_NOT_NUMBE_ERROR,
  BRIDGE_LENGTH_RANGE_OUT_ERROR,
} = require("./Constant");

const Validation = {
  bridgeLengthValidation(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error(BRIDGE_LENGTH_NOT_NUMBE_ERROR);
    }
    if (Number(input) < 3 || Number(input) > 20) {
      throw new Error(BRIDGE_LENGTH_RANGE_OUT_ERROR);
    }
  },
};

module.exports = Validation;
