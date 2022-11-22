const { ERROR_MESSAGE } = require("./constants/Messages.js");
const Validator = {
  BRIDGE_SIZE_REGEX: /^[3-9]{1}$|^1{1}[0-9]{1}$|20/,
  MOVE_REGEX: /^[UD]$/,
  RESTART_REGEX: /^[RQ]$/,

  /**
   * length이 3이상 20이하의 숫자가 아니면 Error
   * @param {any} length
   */
  checkBridgeLengthInput(length) {
    if (!this.BRIDGE_SIZE_REGEX.test(length))
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_ERROR);
  },

  /**
   * 'U', 'D'가 아니면 Error
   * @param {any} moveCmd
   */
  checkValidMove(moveCmd) {
    if (!this.MOVE_REGEX.test(moveCmd))
      throw new Error(ERROR_MESSAGE.MOVE_INPUT_ERROR);
  },

  /**
   * 'R', 'Q' 가 아니면 Error
   * @param {any} gameCmd
   */
  checkValidRestart(gameCmd) {
    if (!this.RESTART_REGEX.test(gameCmd))
      throw new Error(ERROR_MESSAGE.RESTART_INPUT_ERROR);
  },
};

module.exports = Validator;
