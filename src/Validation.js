const { LENGTH, BRIDGE, COMMAND } = require("./constants/data");
const { ERROR_MESSAGE } = require("./constants/message");

const Validation = {
  checkBridgeLength(length) {
    this.isOnlyNumber(length);
    this.isInRange(length);
  },
  isOnlyNumber(length) {
    if (isNaN(length)) throw new Error(ERROR_MESSAGE.NUMBER);
  },
  isInRange(length) {
    if (length < LENGTH.MIN || length > LENGTH.MAX)
      throw new Error(ERROR_MESSAGE.RANGE);
  },

  checkUserMoveInput(userInput) {
    if (userInput !== BRIDGE.LOWER_ZONE && userInput !== BRIDGE.UPPER_ZONE)
      throw new Error(ERROR_MESSAGE.MOVE_INPUT);
  },

  checkCommandInput(commandInput) {
    if (commandInput !== COMMAND.RESTART && commandInput !== COMMAND.END)
      throw new Error(ERROR_MESSAGE.COMMAND);
  },
};

module.exports = Validation;
