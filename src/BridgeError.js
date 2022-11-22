const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/CONSTANT");

const BridgeError = {
  size(size) {
    try {
      throw new Error(MESSAGE.ERROR.FEEDBACK(size));
    } catch (error) {
      Console.print(error.message);
      Console.print(MESSAGE.ERROR.SIZE);
      return false;
    }
  },
  move(moveInput) {
    try {
      throw new Error(MESSAGE.ERROR.FEEDBACK(moveInput));
    } catch (error) {
      Console.print(error.message);
      Console.print(MESSAGE.ERROR.MOVE);
      return false;
    }
  },
  command(command) {
    try {
      throw new Error(MESSAGE.ERROR.FEEDBACK(command));
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  },
};

module.exports = BridgeError;
