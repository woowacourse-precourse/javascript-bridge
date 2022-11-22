const { BRIDGE_SIZE, DIRECTION, COMMAND } = require("./constants");
const { ERROR_MESSAGE } = require("./messages");

const InputValidate = {
  checkBridgeSize(size) {
    if (!Number(size)) {
      throw new Error("[ERROR] 다리 길이는 숫자 형식이어야 합니다.");
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

module.exports = InputValidate;
