const { BRIDGE, ERROR, GAME, MOVEMENT } = require("./constants");

const Validator = {
  isValidBridgeSize(input) {
    if (!Number(input)) {
      throw new Error(ERROR.BRIDGE_SIZE_TYPE);
    }
    if (+input < BRIDGE.SIZE_MIN || +input > BRIDGE.SIZE_MAX) {
      throw new Error(ERROR.BRIDGE_SIZE_RANGE);
    }
  },

  isValidMoving(input) {
    if (input !== MOVEMENT.DOWN && input !== MOVEMENT.UP) {
      throw new Error(ERROR.BRIDGE_MOVING);
    }
  },

  isValidInput(input) {
    if (input !== GAME.RETRY && input !== GAME.QUIT) {
      throw new Error(ERROR.RETRY_END);
    }
  },
};

module.exports = Validator;
