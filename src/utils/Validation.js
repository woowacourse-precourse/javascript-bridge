const { MOVEMENT, COMMAND, BRIDGE_SIZE, ERROR_MESSAGE } = require('./constructor');

const Validation = {
  validBridgeSize(input) {
    if (isNaN(input)) {
      throw Error(ERROR_MESSAGE.NOT_NUMBER);
    } 
    const bridgeSize = parseInt(input);
    if (bridgeSize < BRIDGE_SIZE.MIN || bridgeSize > BRIDGE_SIZE.MAX) {
      throw Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  },

  validMoving(input) {
    if (input !== MOVEMENT.UP && input !== MOVEMENT.DOWN) {
      throw Error(ERROR_MESSAGE.WRONG_INPUT);
    }
  },
  
  validCommand(input) {
    if (input !== COMMAND.RETRY && input !== COMMAND.QUIT) {
      throw Error(ERROR_MESSAGE.WRONG_INPUT);
    }
  },
}

module.exports = Validation;