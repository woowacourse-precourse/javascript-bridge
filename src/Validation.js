const { ERROR_MSG } = require("./constants/message.js");

class Validation {
  static checkBridgeSize(size) {
    if (size < 3 || size > 20) throw new Error(ERROR_MSG.invalidRange);
    if (isNaN(size)) throw new Error(ERROR_MSG.invalidRange);
  }

  static checkDirection(direction) {
    if (!this.#isValidDirection(direction)) {
      throw new Error(ERROR_MSG.invalidDirection);
    }
  }

  static #isValidDirection(direction) {
    return direction === "D" || direction === "U";
  }

  static checkRestartInput(userRestart) {
    if (!this.#isRestartInput(userRestart)) {
      throw new Error(ERROR_MSG.inValidRestart);
    }
  }

  static #isRestartInput(userRestart) {
    return userRestart === "Q" || userRestart === "R";
  }
}

module.exports = Validation;
