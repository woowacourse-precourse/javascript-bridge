const Validator = require('./Validator');
const { INPUT_ERROR, BRIDGE, GAME } = require('./constants');

class InputValidator extends Validator {
  static isValidBridgeSize(size) {
    const isValidBridgeSize =
      InputValidator.isNumericInput(size) &&
      !InputValidator.isZeroStartInput(size) &&
      InputValidator.isBetween(size, BRIDGE.MIN_SIZE, BRIDGE.MAX_SIZE);
    if (isValidBridgeSize) return true;
    throw new Error(INPUT_ERROR.BRIDGE_SIZE);
  }

  static isValidMoving(moving) {
    const isValidMoving = moving === BRIDGE.UP || moving === BRIDGE.DOWN;
    if (isValidMoving) return true;
    throw new Error(INPUT_ERROR.MOVING);
  }

  static isValidGameCommand(gameCommand) {
    const isValidGameCommand = gameCommand === GAME.RETRY || gameCommand === GAME.QUIT;
    if (isValidGameCommand) return true;
    throw new Error(INPUT_ERROR.GAME_COMMAND);
  }
}

module.exports = InputValidator;
