const SETTING = require('../constants/gameSetting');

const Validator = {
  isNumber(value) {
    return /^[0-9]*$/.test(value);
  },

  isBridgeSize(value) {
    if (!this.isNumber(value)) return false;

    return value >= SETTING.MIN_BRIDGE_SIZE && value <= SETTING.MAX_BRIDGE_SIZE;
  },

  isMoving(value) {
    return value === SETTING.MOVING_UP || value === SETTING.MOVING_DOWN;
  },

  isGameCommand(value) {
    return value === SETTING.GAME_RESTART || value === SETTING.GAME_QUIT;
  },

  isMoveCountOverBridgeSize(moveCount, bridgeSize) {
    return moveCount > bridgeSize;
  },
};

module.exports = Validator;
