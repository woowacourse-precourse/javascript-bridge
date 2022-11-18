const { BRIDGE_LENGTH_LIMIT, SPACE_TO_MOVE, GAME_CHOICE, ERROR_MESSAGE } = require("./Utils");

const Validate = {

  validateBridgeLength(size) {
    if (size > BRIDGE_LENGTH_LIMIT.BRIDGE_LENGTH_MAXIMUM ||
        size < BRIDGE_LENGTH_LIMIT.BRIDGE_LENGTH_MINIMUM) {
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_NOT_PIXED_NUMBER); 
    }
    if (isNaN(size)) {
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_NOT_PIXED_NUMBER);
    }
    return size
  },
}

module.exports = Validate