const Validator = require('./Validator');
const { INPUT_ERROR, BRIDGE, GAME } = require('./constants');

class InputValidator extends Validator {
  static isValidBridgeSize(size) {
    const isValidBridgeSize =
      InputValidator.isNumericInput(size) &&
      !InputValidator.isZeroStartInput(size) &&
      InputValidator.isBetween(size, BRIDGE.minSize, BRIDGE.maxSize);
    if (isValidBridgeSize) return true;
    throw new Error(INPUT_ERROR.bridgeSize);
  }

  static isValidMoving(moving) {
    const isValidMoving = moving === BRIDGE.up || moving === BRIDGE.down;
    if (isValidMoving) return true;
    throw new Error(INPUT_ERROR.moving);
  }

  static isValidGameCommand(gameCommand) {
    const isValidGameCommand = gameCommand === GAME.retry || gameCommand === GAME.quit;
    if (isValidGameCommand) return true;
    throw new Error(INPUT_ERROR.gameCommand);
  }
}

module.exports = InputValidator;
