const { ERROR, INPUT_FORMAT } = require('./constants');
const { REGEX_NUMBER_RANGE } = require('../src/constants');

const Validator = {
  checkBridgeSize(size) {
    const match = REGEX_NUMBER_RANGE.test(size);

    if (!match) throw new Error(ERROR.INPUT_BRIDGE_SIZE);

    return size;
  },

  checkMovingDirection(moving) {
    if (![INPUT_FORMAT.UPSIDE, INPUT_FORMAT.DOWNSIDE].includes(moving)) {
      throw new Error(ERROR.INPUT_MOVING_DIRECTION);
    }

    return moving;
  },
  checkGameCommand(command) {
    if (![INPUT_FORMAT.RETRY, INPUT_FORMAT.TERMINATE].includes(command)) {
      throw new Error(ERROR.INPUT_GAME_COMMAND);
    }

    return command;
  },
};

module.exports = Validator;
