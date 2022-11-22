const { BRIDGE_SIZE, DIRECTION, COMMAND } = require("./constants");
const { ERROR_MESSAGE } = require("./messages");

const InputValidator = {
  checkBridgeSize(size) {
    if (!Number(size)) {
      throw new Error(ERROR_MESSAGE.BRIDGE_NUMBER_TYPE);
    }
    if (Number(size) < BRIDGE_SIZE.MIN || Number(size) > BRIDGE_SIZE.MAX) {
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
    }
  },

  checkMovingDirection(direction) {
    if (direction !== DIRECTION.TO_UPPER && direction !== DIRECTION.TO_LOWER) {
      throw new Error(ERROR_MESSAGE.MOVING_DIRECTION);
    }
  },

  checkRetryOrQuitCommand(command) {
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT) {
      throw new Error(ERROR_MESSAGE.RETRY_COMMAND);
    }
  },
};

module.exports = InputValidator;
