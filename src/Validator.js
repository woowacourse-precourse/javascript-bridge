const { ERROR_MESSAGE } = require("./constants/Messages.js");
const Validator = {
  BRIDGE_LENGTH_REGEX: /^[3-9]{1}$|^1{1}[0-9]{1}$|20/,
  // 3이상 20이하의 숫자가 아니면 Error
  checkBridgeLengthInput(input) {
    if (!this.BRIDGE_LENGTH_REGEX.test(input))
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_ERROR);
  },
};

module.exports = Validator;
