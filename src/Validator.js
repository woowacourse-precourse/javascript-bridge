const ERROR = require('./constants/error');
const SETTING = require('./constants/gameSetting');

class Validator {
  static validateBridgeSize(bridgeSize) {
    if (!this.isBridgeSize(bridgeSize)) throw new Error(ERROR.BRIDGE_SIZE);

    return true;
  }

  static validateMoving(moving) {
    if (!this.isMoving(moving)) throw new Error(ERROR.MOVING);

    return true;
  }

  static validateGameCommand(gameCommand) {
    if (!this.isGameCommand(gameCommand)) throw new Error(ERROR.GAME_COMMAND);

    return true;
  }

  static isNumber(value) {
    return /^[1-9][0-9]*$/.test(value);
  }

  static isBridgeSize(value) {
    if (!this.isNumber(value)) return false;

    return value >= SETTING.MIN_BRIDGE_SIZE && value <= SETTING.MAX_BRIDGE_SIZE;
  }

  static isMoving(value) {
    return value === SETTING.MOVING_UP || value === SETTING.MOVING_DOWN;
  }

  static isGameCommand(value) {
    return value === SETTING.GAME_RESTART || value === SETTING.GAME_QUIT;
  }
}

module.exports = Validator;
