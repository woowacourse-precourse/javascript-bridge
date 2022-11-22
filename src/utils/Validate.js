const { BRIDGE } = require("../constants/constants");

const Validate = {
  validateBridgeLength(userInput) {
    if (
      this.isBridgeLengthNum(userInput) &&
      this.isBridgeLengthSize(userInput)
    ) {
      return true;
    }
    return false;
  },

  isBridgeLengthNum(userInput) {
    if (isNaN(userInput) || Number(userInput) % 1 !== 0) {
      return false;
    }
    return true;
  },

  isBridgeLengthSize(userInput) {
    if (
      Number(userInput) < BRIDGE.SIZE_MIN ||
      BRIDGE.SIZE_MAX < Number(userInput)
    ) {
      return false;
    }
    return true;
  },
};
module.exports = Validate;
