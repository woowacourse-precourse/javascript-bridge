const { WORD, MESSAGE } = require("./Constants");

const InputValidator = {
  validateBridgeSize(bridgeSize) {
    if (WORD.START_SIZE <= bridgeSize && bridgeSize <= WORD.END_SIZE) {
      return bridgeSize;
    }
  },
  validateMoving(moving) {},
  validateGameCommand(gameCommand) {},
};

module.exports = InputValidator;
