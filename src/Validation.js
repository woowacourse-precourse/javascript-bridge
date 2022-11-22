const { ERROR } = require("./Messages");

const CONSTANTS = {
  BRIDGE_MIN_LENGTH: 3,
  BRIDGE_MAX_LENGTH: 20,
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
  INPUT_LENGTH: 1,
}
  
const Validation = {

  validateBridgeSize(size) {
    if(size < CONSTANTS.BRIDGE_MIN_LENGTH || size > CONSTANTS.BRIDGE_MAX_LENGTH) {
      throw new Error(ERROR.BRIDGE_SIZE_LENGTH_ERROR);
    };
    if(isNaN(size)) {
      throw new Error(ERROR.BRIDGE_TYPE_ERROR);
    };
  },

  validateUserMove(upOrDown) {
    if(upOrDown.length !== CONSTANTS.INPUT_LENGTH) {
      throw new Error(ERROR.BRIDGE_MOVE_INPUT_LENGTH_ERROR);
    }
    if(![CONSTANTS.UP, CONSTANTS.DOWN].includes(upOrDown)) {
      throw new Error(ERROR.BRIDGE_MOVE_INPUT_ERROR);
    }
  },
  
  validateGameCommand(retryOrQuit) {
    if(retryOrQuit.length !== CONSTANTS.INPUT_LENGTH) {
      throw new Error(ERROR.GAME_COMMAND_INPUT_LENGTH_ERROR);
    }
    if(![CONSTANTS.RETRY, CONSTANTS.QUIT].includes(retryOrQuit)) {
      throw new Error(ERROR.GAME_COMMAND_INPUT_ERROR);
    }
  },

}

module.exports = Validation;