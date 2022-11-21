const { ERROR_MESSAGE } = require("../constants/Message");
const { INPUT_VALUE } = require("../constants/InputValue");

const Validate = {
  validateSize(size) {
    if (isNaN(size)) {
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE.NOT_A_NUMBER);
    }
    if (size < 3 || size > 20) {
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE.INVALID_RANGE);
    }
  },
  validateMoving(moving) {
    if (moving !== INPUT_VALUE.UP && moving !== INPUT_VALUE.DOWN) {
      throw new Error(ERROR_MESSAGE.MOVING);
    }
  },
  validateCommand(command) {
    if (command !== INPUT_VALUE.RETRY && command !== INPUT_VALUE.QUIT) {
      throw new Error(ERROR_MESSAGE.COMMAND);
    }
  },
};

module.exports = Validate;
