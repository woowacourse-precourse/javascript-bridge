const { Console } = require("@woowacourse/mission-utils");
const { LENGTH, BRIDGE, COMMAND } = require("./constants/data");
const { ERROR_MESSAGE } = require("./constants/message");

const Validation = {
  checkBridgeLength(length) {
    const number = this.isOnlyNumber(length);
    const range = this.isInRange(length);
    if (number || range) {
      return true;
    }
    return false;
  },
  isOnlyNumber(length) {
    try {
      if (isNaN(length)) throw new Error(ERROR_MESSAGE.NUMBER);
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },
  isInRange(length) {
    try {
      if (length < LENGTH.MIN || length > LENGTH.MAX)
        throw new Error(ERROR_MESSAGE.RANGE);
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkUserMoveInput(userInput) {
    try {
      if (userInput !== BRIDGE.LOWER_ZONE && userInput !== BRIDGE.UPPER_ZONE)
        throw new Error(ERROR_MESSAGE.MOVE_INPUT);
    } catch (e) {
      Console.print(e.message);
      return true;
    }
    return false;
  },

  checkCommandInput(commandInput) {
    try {
      if (commandInput !== COMMAND.RESTART && commandInput !== COMMAND.END)
        throw new Error(ERROR_MESSAGE.COMMAND);
    } catch (e) {
      Console.print(e.message);
      return true;
    }
    return false;
  },
};

module.exports = Validation;
