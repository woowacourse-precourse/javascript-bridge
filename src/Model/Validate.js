const { ERROR_MESSAGE } = require("../Utils/Constants");

class Validate {
  checkBridgeSize(size) {
    if (isNaN(Number(size))) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);
    if (size < 3 || size > 20) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  }

  checkMovingDirection(direction) {
    if (!(direction === "U" || direction === "D"))
      throw new Error(ERROR_MESSAGE.MOVING_DIRECTION);
  }

  checkGameCommand(command) {
    if (!(command === "R" || command === "Q"))
      throw new Error(ERROR_MESSAGE.GAME_COMMAND);
  }
}

module.exports = Validate;
