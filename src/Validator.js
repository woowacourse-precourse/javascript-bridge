const { ERROR_MESSAGE } = require('./utils/message');

//TODO: 확장성
const Validator = {
  BRIDGE_SIZE_REGEX: /^([3-9]|1[0-9]|20)$/,
  MOVE_REGEX: /^[UD]$/,
  COMMAND_REGEX: /^[RQ]$/,

  checkBridgeSize(size) {
    if (!this.BRIDGE_SIZE_REGEX.test(size)) {
      throw new Error(ERROR_MESSAGE.bridgeSize);
    }
  },

  checkMove(move) {
    if (!this.MOVE_REGEX.test(move)) {
      throw new Error(ERROR_MESSAGE.move);
    }
  },

  checkGameCommand(command) {
    if (!this.COMMAND_REGEX.test(command)) {
      throw new Error(ERROR_MESSAGE.command);
    }
  },
};

module.exports = Validator;
