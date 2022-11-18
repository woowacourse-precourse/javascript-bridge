const { Console } = require("@woowacourse/mission-utils");
const { SIZE, MOVING, COMMAND } = require("./constants/values");
const { ERROR } = require("./constants/messages");

const Check = {
  checkBridgeSize(size) {
    const number = this.checkNumber(size);
    const range = this.checkRange(size);

    if (number || range) {
      return true;
    }
    return false;
  },

  checkNumber(size) {
    try {
      if (isNaN(size)) {
        throw new Error(ERROR.NUMBER);
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkRange(size) {
    try {
      if (size < SIZE.MINIMUM || size > SIZE.MAXIMUM) {
        throw new Error(ERROR.RANGE);
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkMoving(moving) {
    try {
      if (moving !== MOVING.UPPER && moving !== MOVING.LOWER) {
        throw new Error(ERROR.MOVING);
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }

    return false;
  },

  checkCommand(command) {
    try {
      if (command !== COMMAND.RESTART && command !== COMMAND.END) {
        throw new Error(ERROR.COMMAND);
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }

    return false;
  },
};

module.exports = Check;
