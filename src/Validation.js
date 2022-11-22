const { DIRECTION_KEY, BRIDGE_SIZE } = require("./constants/rule.js");
const { ERROR_MSG } = require("./constants/message.js");

class Validation {
  static checkBridgeSize(size) {
    if (size < BRIDGE_SIZE.MIN_NUM || size > BRIDGE_SIZE.MAX_NUM)
      throw new Error(ERROR_MSG.invalidRange);
    if (isNaN(size)) throw new Error(ERROR_MSG.invalidRange);
  }

  static checkDirection(direction) {
    if (!this.#isValidDirection(direction)) {
      throw new Error(ERROR_MSG.invalidDirection);
    }
  }

  static #isValidDirection(direction) {
    return direction === DIRECTION_KEY.DOWN || direction === DIRECTION_KEY.UP;
  }

  static checkRestartInput(userRestart) {
    if (!this.#isRestartInput(userRestart)) {
      throw new Error(ERROR_MSG.inValidRestart);
    }
  }

  static #isRestartInput(userRestart) {
    return (
      userRestart === DIRECTION_KEY.QUIT ||
      userRestart === DIRECTION_KEY.RESTART
    );
  }
}

module.exports = Validation;
