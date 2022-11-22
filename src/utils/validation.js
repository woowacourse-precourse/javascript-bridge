const { BRIDGE_INFO } = require("../constants/Constants");
const { ERROR_MESSAGE } = require("../constants/Message");

class Validator {
  static validateBridgeSize(size) {
    if (!Validator.isRightRange(size))
      throw new Error(ERROR_MESSAGE.NOT_RIGHT_BRIDGE_LENGTH);
  }
  static isRightRange(number) {
    return (
      number >= BRIDGE_INFO.MINIMUM_BRIDGE_LENGTH &&
      number <= BRIDGE_INFO.MAXIMUM_BRIDGE_LENGTH
    );
  }

  static validateMove(move) {
    if (!Validator.isRightMove(move)) {
      throw new Error(ERROR_MESSAGE.NOT_RIGHT_MOVE);
    }
  }
  static isRightMove(move) {
    return move === BRIDGE_INFO.UP_STR || move === BRIDGE_INFO.DOWN_STR;
  }

  static validateRestartOrQuit(input) {
    if (!this.isRightInput(input)) {
      throw new Error(ERROR_MESSAGE.NOT_RIGHT_INPUT);
    }
  }

  static isRightInput(input) {
    return input === BRIDGE_INFO.RETRY || input === BRIDGE_INFO.QUIT;
  }
}

module.exports = Validator;
