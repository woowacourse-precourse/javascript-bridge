const { SIZE, WAY, COMMAND, ERROR } = require("./constants/index");

const Validator = {
  checkBridgeSizeValid(size) {
    if (isNaN(size)) {
      throw new Error(ERROR.SIZE_TYPE);
    }

    if (size < SIZE.MIN || size > SIZE.MAX) {
      throw new Error(ERROR.SIZE_RANGE);
    }
  },

  checkMovingValid(moving) {
    if (moving !== WAY.UP && moving !== WAY.DOWN) {
      throw new Error(ERROR.INVALID_MOVING);
    }
  },

  checkCommandValid(command) {
    if (command !== COMMAND.RETRY && command !== COMMAND.QUIT) {
      throw new Error(ERROR.INVALID_COMMAND);
    }
  },
};

module.exports = Validator;
