const { ERROR_MESSAGE } = require("./constants/Messages.js");
const Validator = {
  BRIDGE_SIZE_REGEX: /^[3-9]{1}$|^1{1}[0-9]{1}$|20/,
  MOVE_REGEX: /^[UD]$/,
  // 3이상 20이하의 숫자가 아니면 Error
  checkBridgeLengthInput(input) {
    if (!this.BRIDGE_SIZE_REGEX.test(input))
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_ERROR);
  },
  // 'U', 'D'가 아니면 Error
  checkValidMove(input) {
    if (!this.MOVE_REGEX.test(input))
      throw new Error(ERROR_MESSAGE.MOVE_INPUT_ERROR);
  },
};

module.exports = Validator;
