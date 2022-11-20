const { ERROR_MESSAGE } = require("./constants");
class Validation {
  isValidLength(input) {
    if (!(input >= 3 && input <= 20)) throw ERROR_MESSAGE.BRIDGE_LENGTH;
  }
  isUpOrDown(input) {
    if (input !== "U" && input !== "D") throw ERROR_MESSAGE.UP_OR_DOWN;
  }
  isRestartOrQuit(input) {
    if (input !== "R" && input !== "Q") throw ERROR_MESSAGE.RETRY_OR_QUIT;
  }
}

module.exports = Validation;
