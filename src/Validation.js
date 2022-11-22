const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require("./constants");

const Validation = {
  isVaildBridgeSize(size) {
    const number = this.isVaildNumber(size);
    const range = this.isVaildRange(size);

    if (number || range) {
      return true;
    }
    return false;
  },

  isVaildNumber(size) {
    try {
      if (isNaN(size)) {
        throw new Error(ERROR.NUMBER);
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  isVaildRange(size) {
    try {
      if (size < 3 || size > 20) {
        throw new Error(ERROR.RANGE);
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  isVaildMoving(moving) {
    const UPPER_MOVING = "U";
    const LOWER_MOVING = "D";

    try {
      if (moving !== UPPER_MOVING && moving !== LOWER_MOVING) {
        throw new Error(ERROR.MOVING);
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }

    false;
  },

  isVaildCommand(command) {
    try {
      if (command !== "R" && command !== "Q") {
        throw new Error(ERROR.COMMAND);
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }

    return false;
  },
};

module.exports = Validation;
