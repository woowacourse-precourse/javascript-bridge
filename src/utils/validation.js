const { ERROR_MESSAGE, BRIDGE } = require("./constants");
class Validation {
  isValidLength(input) {
    if (!(input >= BRIDGE.MIN_LENGTH && input <= BRIDGE.MAX_LENGTH))
      throw ERROR_MESSAGE.BRIDGE_LENGTH;
  }

  isUpOrDown(input) {
    if (input !== BRIDGE.UP && input !== BRIDGE.DOWN)
      throw ERROR_MESSAGE.UP_OR_DOWN;
  }

  isRestartOrQuit(input) {
    if (input !== BRIDGE.RETRY && input !== BRIDGE.QUIT)
      throw ERROR_MESSAGE.RETRY_OR_QUIT;
  }
}

module.exports = Validation;
