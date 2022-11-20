const { BridgeConfig, GameConfig, Message } = require('./Config');

const Validator = {

  bridgeSize(input) {
    if (!/^\d+$/.test(input.trim())) {
      throw new RangeError(Message.ERROR_BRIDGE_LENGTH);
    }

    const number = Number(input);
    if (number % 1 !== 0 || number < BridgeConfig.MIN_LENGTH || number > BridgeConfig.MAX_LENGTH) {
      throw new RangeError(Message.ERROR_BRIDGE_LENGTH);
    }
  },

  direction(direction) {
    if (direction !== BridgeConfig.UP && direction !== BridgeConfig.DOWN) {
      throw new Error(Message.ERROR_MOVE);
    }
  },

  retry(input) {
    if (input !== GameConfig.QUIT && input !== GameConfig.RETRY) {
      throw new Error(Message.ERROR_RETRY);
    }
  },
};

module.exports = Validator;
