const { ERROR, INPUT_FORMAT } = require('./constants');

const REGEX_NUMBER_RANGE = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{}$/;

const Validator = {
  checkBridgeSize(size) {
    const match = REGEX_NUMBER_RANGE.test(size);

    if (!match) throw new Error(ERROR.INPUT_BRIDGE_SIZE);
  },

  checkMovingDirection(moving) {
    if (![INPUT_FORMAT.UPSIDE, INPUT_FORMAT.DOWNSIDE].includes(moving)) {
      throw new Error(ERROR.INPUT_MOVING_DIRECTION);
    }
  },
  checkGameCommand(command) {
    if (![INPUT_FORMAT.RETRY, INPUT_FORMAT.TERMINATE].includes(command)) {
      throw new Error(ERROR.INPUT_GAME_COMMAND);
    }
  },
};

module.exports = Validator;
