const { DIRECTION_KEY, BRIDGE_SIZE } = require("./constants/rule");

class Validation {
  static checkBridgeSize(size) {
    if (size < BRIDGE_SIZE.MIN_NUM || size > BRIDGE_SIZE.MAX_NUM)
      throw new Error();
    if (isNaN(size)) throw new Error();
  }

  static checkDirection(direction) {
    if (!this.#isValidDirection(direction)) {
      throw new Error();
    }
  }

  static #isValidDirection(direction) {
    return direction === DIRECTION_KEY.DOWN || direction === DIRECTION_KEY.UP;
  }

  static checkRestartInput(userRestart) {
    if (!this.#isRestartInput(userRestart)) {
      throw new Error();
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
