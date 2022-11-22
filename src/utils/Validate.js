const { BRIDGE, COMMAND } = require("../constants/constants");

const Validate = {
  validateBridgeLength(userInput) {
    if (
      this.isBridgeLengthNum(userInput) &&
      this.isBridgeLengthSize(userInput)
    ) {
      return true;
    }
    return false;
  },

  validateMoveCommand(userInput) {
    if (this.isMoveCommand(userInput)) {
      return true;
    }
    return false;
  },

  validateGameCommand(userInput) {
    if (this.isGameCommand(userInput)) {
      return true;
    }
    return false;
  },

  isMoveCommand(userInput) {
    if (userInput === BRIDGE.UP || userInput === BRIDGE.DOWN) {
      return true;
    }
    return false;
  },

  isGameCommand(userInput) {
    if (userInput === COMMAND.RESTART || userInput === COMMAND.QUIT) {
      return true;
    }
    return false;
  },

  isBridgeLengthNum(userInput) {
    if (isNaN(userInput) || Number(userInput) % 1 !== 0) {
      return false;
    }
    return true;
  },

  isBridgeLengthSize(userInput) {
    if (
      Number(userInput) < BRIDGE.SIZE_MIN ||
      BRIDGE.SIZE_MAX < Number(userInput)
    ) {
      return false;
    }
    return true;
  },
};
module.exports = Validate;
