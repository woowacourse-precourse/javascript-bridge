const { ERROR } = require("./Messages");

const Validation = {

  validateBridgeSize(size) {
    if(size < 3 || size > 20) {
      throw new Error(ERROR.BRIDGE_SIZE_LENGTH_ERROR);
    };
    if(isNaN(size)) {
      throw new Error(ERROR.BRIDGE_TYPE_ERROR);
    };
  },

  validateUserMove(upOrDown) {
    if(!['U', 'D'].includes(upOrDown)) {
      throw new Error(ERROR.BRIDGE_MOVE_INPUT_ERROR);
    }
    if(upOrDown.length !== 1) {
      throw new Error(ERROR.BRIDGE_MOVE_INPUT_LENGTH_ERROR);
    }
  },
  
  validateGameCommand(retryOrQuit) {
    if(retryOrQuit.length !== 1) {
      throw new Error(ERROR.GAME_COMMAND_INPUT_LENGTH_ERROR);
    }
    if(!['R', 'Q'].includes(retryOrQuit)) {
      throw new Error(ERROR.GAME_COMMAND_INPUT_ERROR);
    }
  },

}

module.exports = Validation;