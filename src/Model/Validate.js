const {
  ERROR_MESSAGE,
  BRIDGE_SIZE,
  BRIDGE,
  GAME_OPTION,
} = require("../Utils/Constants");

class Validate {
  checkBridgeSize(size) {
    try {
      if (this.isValidNumber(size))
        throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);

      if (this.isValidRange(size))
        throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);

      return null;
    } catch (errorMsg) {
      return errorMsg;
    }
  }

  checkMovingDirection(direction) {
    try {
      if (this.isValidDirection(direction))
        throw new Error(ERROR_MESSAGE.MOVING_DIRECTION);

      return null;
    } catch (errorMsg) {
      return errorMsg;
    }
  }

  checkGameCommand(command) {
    try {
      if (this.isValidGameCommand(command))
        throw new Error(ERROR_MESSAGE.GAME_COMMAND);

      return null;
    } catch (errorMsg) {
      return errorMsg;
    }
  }

  isValidNumber(size) {
    return isNaN(Number(size));
  }

  isValidRange(size) {
    return Number(size) < BRIDGE_SIZE.MIN || Number(size) > BRIDGE_SIZE.MAX;
  }

  isValidDirection(direction) {
    return !(direction === BRIDGE.UPPER || direction === BRIDGE.LOWER);
  }

  isValidGameCommand(command) {
    return !(command === GAME_OPTION.REPLAY || command === GAME_OPTION.QUIT);
  }
}

module.exports = Validate;
