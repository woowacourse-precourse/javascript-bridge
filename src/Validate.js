const { BRIDGE_LENGTH_LIMIT, SPACE_TO_MOVE, GAME_CHOICE, ERROR_MESSAGE } = require("./Utils");

const Validate = {

  validateBridgeLength(size) {
    if (size > BRIDGE_LENGTH_LIMIT.BRIDGE_LENGTH_MAXIMUM ||
        size < BRIDGE_LENGTH_LIMIT.BRIDGE_LENGTH_MINIMUM) {
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_NOT_PIXED_NUMBER); 
    };
    if (isNaN(size)) {
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_NOT_PIXED_NUMBER);
    };
    return size;
  },

  validateMoving(move) {
    if (move !== SPACE_TO_MOVE.MOVE_UP && move !== SPACE_TO_MOVE.MOVE_DOWN) {
      throw new Error(ERROR_MESSAGE.CHOICE_SPACE_NOT_PIXED_VALUE);
    };
    return move;
  },

  ValidateCommand(command) {
    if (command !== GAME_CHOICE.GAME_RETRY && command !== GAME_CHOICE.GAME_END) {
      throw new Error(ERROR_MESSAGE.CHOICE_GAME_NOT_PIXED_VALUE);
    }
    return command;
  }
}

module.exports = Validate;