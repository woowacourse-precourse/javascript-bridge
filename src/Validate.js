const MissionUtils = require('@woowacourse/mission-utils');
const { ERROR } = require('./Constants');

const Validate = {
  bridgeSize(size) {
    if (isNaN(size)) {
      throw new Error(ERROR.BRIDGE_LENGTH_NAN);
    }
    if (!Number.isInteger(size)) {
      throw new Error(ERROR.BRIDGE_LENGTH_NOT_INTEGER);
    }
    if (size < 3 || size > 20) {
      throw new Error(ERROR.BRIDGE_LENGTH_RANGE);
    }
  },

  moving(moving) {
    if (moving !== 'U' && moving !== 'D') {
      throw new Error(ERROR.MOVING_CMD_NOT_UD);
    }
  },

  gameCommand(command) {
    if (command !== 'R' && command !== 'Q') {
      throw new Error(ERROR.RETRY_CMD_NOT_RQ);
    }
  },

  hasError(validator, argument) {
    try {
      validator(argument);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return true;
    }
    return false;
  },
};

module.exports = Validate;
