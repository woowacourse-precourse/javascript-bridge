const { Console } = require("@woowacourse/mission-utils");
const { SIZE, MOVING, COMMAND } = require("./constants/values");
const { ERROR } = require("./constants/messages");

const ErrorChecking = {
  hasCorrectSize(size) {
    const number = this.hasNumber(size);
    const range = this.hasInRange(size);
    const incorrectSize = number || range;
    return incorrectSize;
  },

  hasNumber(size) {
    const notNumber = isNaN(size);
    try {
      if (notNumber) throw new Error(ERROR.NUMBER);
    } catch (error) {
      Console.print(error.message);
    }
    return notNumber;
  },

  hasInRange(size) {
    const notInRange = size < SIZE.MINIMUM || size > SIZE.MAXIMUM;
    try {
      if (notInRange) throw new Error(ERROR.RANGE);
    } catch (error) {
      Console.print(error.message);
    }
    return notInRange;
  },

  hasMoving(moving) {
    const notMoving = moving !== MOVING.UPPER && moving !== MOVING.LOWER;
    try {
      if (notMoving) throw new Error(ERROR.MOVING);
    } catch (error) {
      Console.print(error.message);
    }
    return notMoving;
  },

  hasCommand(command) {
    const notCommand = command !== COMMAND.RESTART && command !== COMMAND.END;
    try {
      if (notCommand) throw new Error(ERROR.COMMAND);
    } catch (error) {
      Console.print(error.message);
    }
    return notCommand;
  },
};

module.exports = ErrorChecking;
