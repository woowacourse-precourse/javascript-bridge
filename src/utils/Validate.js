const { ERROR_MESSAGE } = require("../constants/Message");

const Validate = {
  validateSize(size) {
    if (isNaN(size)) {
      throw ERROR_MESSAGE.BRIDGE_SIZE.NOT_A_NUMBER;
    }
    if (size < 3 || size > 20) {
      throw ERROR_MESSAGE.BRIDGE_SIZE.INVALID_RANGE;
    }
  },
  validateMoving(moving) {
    if (moving !== "U" && moving !== "D") {
      throw ERROR_MESSAGE.MOVING;
    }
  },
  validateCommand(command) {
    if (command !== "R" && command !== "Q") {
      throw ERROR_MESSAGE.COMMAND;
    }
  },
};

module.exports = Validate;
