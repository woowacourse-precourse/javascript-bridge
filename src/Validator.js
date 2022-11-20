const { BridgeConfig, GameConfig, Message } = require('./Config');

const Validator = {
  bridgeSize(number) {
    if (number < BridgeConfig.MIN_LENGTH || number > BridgeConfig.MAX_LENGTH) {
      throw new RangeError(Message.ERROR_BRIDGE_LENGTH);
    }
  },

  direction(direction) {
    if (direction !== BridgeConfig.UP && direction !== BridgeConfig.DOWN) {
      throw new Error(Message.ERROR_MOVE);
    }
  },
};

module.exports = Validator;
