const {
  ERROR_MESSAGE,
  BRIDGE_SIZE,
  BRIDGE,
  GAME_OPTION,
} = require("../Utils/Constants");

class Validate {
  checkBridgeSize(size) {
    try {
      this.isValidBridgeSize(size);

      return null;
    } catch (errorMsg) {
      return errorMsg;
    }
  }

  checkMovingDirection(direction) {
    try {
      this.isValidMovingDirection(direction);

      return null;
    } catch (errorMsg) {
      return errorMsg;
    }
  }

  checkGameCommand(command) {
    try {
      this.isValidGameCommand(command);

      return null;
    } catch (errorMsg) {
      return errorMsg;
    }
  }

  isValidBridgeSize(size) {
    this.isValidNumber(size);
    this.isValidRange(size);
  }

  isValidNumber(size) {
    if (isNaN(Number(size))) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);
  }

  isValidRange(size) {
    if (Number(size) < BRIDGE_SIZE.MIN || Number(size) > BRIDGE_SIZE.MAX)
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  }

  isValidMovingDirection(direction) {
    if (!(direction === BRIDGE.UPPER || direction === BRIDGE.LOWER))
      throw new Error(ERROR_MESSAGE.MOVING_DIRECTION);
  }

  isValidGameCommand(command) {
    if (!(command === GAME_OPTION.REPLAY || command === GAME_OPTION.QUIT))
      throw new Error(ERROR_MESSAGE.GAME_COMMAND);
  }
}

module.exports = Validate;
