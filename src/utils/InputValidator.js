const Validator = require('./Validator');
const ERROR = require('../constants/error');

const InputValidator = {
  validateInputBridgeSize(bridgeSize) {
    if (!Validator.isBridgeSize(bridgeSize)) throw ERROR.INPUT_BRIDGE_SIZE;
  },

  validateInputMoving(moving) {
    if (!Validator.isMoving(moving)) throw ERROR.INPUT_MOVING;
  },

  validateInputGameCommand(gameCommand) {
    if (!Validator.isGameCommand(gameCommand)) throw ERROR.INPUT_GAME_COMMAND;
  },
};

module.exports = InputValidator;
