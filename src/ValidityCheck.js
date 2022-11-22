const { RESTART_OR_END, UP_OR_DOWN, ERROR_MESSAGE } = require('./Constant.js');

const ValidityCheck = {
  
  checkBridgeSize(bridgeSize) {
    const regex = /^[0-9]+$/;
    
    if (!regex.test(bridgeSize)) {
      throw ERROR_MESSAGE.BRIDGE_SIZE_NUMBER;
    }
    if (3 > bridgeSize || bridgeSize > 20) {
      throw ERROR_MESSAGE.BRIDGE_SIZE_RANGE;
    }
  },

  checkMovingInfo(movingInfo) {
    if (![UP_OR_DOWN.UP, UP_OR_DOWN.DOWN].includes(movingInfo)) {
      throw ERROR_MESSAGE.MOVING_INFO_LIMIT;
    }
  },

  checkRestartOrFail(answer) {
    if (![RESTART_OR_END.RESTART, RESTART_OR_END.END].includes(answer)) {
      throw ERROR_MESSAGE.ANSWER_LIMIT;
    }
  }
};

module.exports = ValidityCheck;