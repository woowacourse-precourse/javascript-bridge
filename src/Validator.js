const { BRIDGE, ERROR, GAME, BRIDGE_MOVEMENT } = require("./constants");

const Validator = {
  isValidBridgeSize(input) {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(input)) {
      throw new Error(ERROR.BRIDGE_SIZE_TYPE);
    }
    if (+input < BRIDGE.SIZE_MIN || +input > BRIDGE.SIZE_MAX) {
      throw new Error(ERROR.BRIDGE_SIZE_RANGE);
    }
    return true;
  },

  isValidMoving(input) {
    if (input !== BRIDGE_MOVEMENT.DOWN && input !== BRIDGE_MOVEMENT.UP) {
      throw new Error(ERROR.BRIDGE_MOVING);
    }
    return true;
  },

  isValidInput(input) {
    if (input !== GAME.RETRY && input !== GAME.QUIT) {
      throw new Error(ERROR.RETRY_END);
    }
    return true;
  },
};

module.exports = Validator;
