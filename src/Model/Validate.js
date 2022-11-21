const {
  ERROR_MESSAGE,
  BRIDGE_SIZE,
  BRIDGE,
  GAME_OPTION,
} = require("../Utils/Constants");
const OutputView = require("../View/OutputView");

class Validate {
  checkBridgeSize(size) {
    try {
      this.isValidNumber(size);
      this.isValidRange(size);

      return [true, null];
    } catch (errorMsg) {
      return [false, errorMsg];
    }
  }

  checkMovingDirection(direction) {
    try {
      this.isValidDirection(direction);

      return [true, null];
    } catch (errorMsg) {
      return [false, errorMsg];
    }
  }

  checkGameCommand(command) {
    try {
      this.isValidGameCommand(command);

      return [true, null];
    } catch (errorMsg) {
      return [false, errorMsg];
    }
  }

  isValidNumber(size) {
    if (isNaN(Number(size))) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);
  }

  isValidRange(size) {
    if (Number(size) < BRIDGE_SIZE.MIN || Number(size) > BRIDGE_SIZE.MAX)
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  }

  isValidDirection(direction) {
    if (!(direction === BRIDGE.UPPER || direction === BRIDGE.LOWER))
      throw new Error(ERROR_MESSAGE.MOVING_DIRECTION);
  }

  isValidGameCommand(command) {
    if (!(command === GAME_OPTION.REPLAY || command === GAME_OPTION.QUIT))
      throw new Error(ERROR_MESSAGE.GAME_COMMAND);
  }
}

module.exports = Validate;
