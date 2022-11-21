const { 
  GAME_NUMBER, 
  GAME_STRING, 
  ERROR_INPUT, 
} = require('../Constants/constant');

const Validation = {
  checkBridgeLength(bridgeSize) {
    if (
      !(bridgeSize >= GAME_NUMBER.min 
      && bridgeSize <= GAME_NUMBER.max)
    ) throw new Error(ERROR_INPUT.sizeMessage);
  },

  checkMoveInput(moveAnswer) {
    if (
      !(moveAnswer === GAME_STRING.upBridge 
      || moveAnswer === GAME_STRING.downBridge)
    ) throw new Error(ERROR_INPUT.moveMessage);  
  },

  checkRestartInput(retryAnswer) {
    if (
      !(retryAnswer === GAME_STRING.retry
      || retryAnswer === GAME_STRING.quit)
    ) throw new Error(ERROR_INPUT.retryMessage);
  },
};

module.exports = Validation;
