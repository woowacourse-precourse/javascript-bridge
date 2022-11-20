const {
  ERROR_MESSAGE,
  BRIDGE_SIZE,
  GAME_OPTION,
  BRIDGE_SIGN,
} = require("../Utils/Constants");

class Validate {
  checkBridgeSize(size) {
    if (isNaN(Number(size))) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);
    if (size < BRIDGE_SIZE.MIN || size > BRIDGE_SIZE.MAX)
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  }

  checkMovingDirection(direction) {
    if (!(direction === BRIDGE_SIGN.UPPER || direction === BRIDGE_SIGN.LOWER))
      throw new Error(ERROR_MESSAGE.MOVING_DIRECTION);
  }

  checkGameCommand(command) {
    if (!(command === GAME_OPTION.REPLAY || command === GAME_OPTION.QUIT))
      throw new Error(ERROR_MESSAGE.GAME_COMMAND);
  }
}

module.exports = Validate;
