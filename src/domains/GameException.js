const { isInRange } = require('../../lib/utils');
const { GAME_COMMAND, ERROR_MESSAGE } = require('../../lib/constans');

const GameException = {
  handleBridgeSizeException(bridgeSize) {
    if (bridgeSize === '' || isNaN(bridgeSize) || !isInRange(bridgeSize, 3, 20)) {
      throw ERROR_MESSAGE.size;
    }
  },

  handleMovingException(moving) {
    if (moving !== GAME_COMMAND.up && moving !== GAME_COMMAND.down) {
      throw ERROR_MESSAGE.moving;
    }
  },

  handleRetryException(command) {
    if (command !== GAME_COMMAND.retry && command !== GAME_COMMAND.quit) {
      throw ERROR_MESSAGE.retry;
    }
  }
};

module.exports = GameException;
