const Validate = {
  bridgeSize(size) {
    if (isNaN(size)) {
      throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_NAN);
    }
    if (!Number.isInteger(size)) {
      throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_NOT_INTEGER);
    }
    if (size < 3 || size > 20) {
      throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_RANGE);
    }
  },

  moving(moving) {
    if (moving !== 'U' && moving !== 'D') {
      throw new Error(MESSAGES.ERROR.MOVING_CMD_NOT_UD);
    }
  },

  gameCommand(command) {
    if (command !== 'R' && command !== 'Q') {
      throw new Error(MESSAGES.ERROR.RETRY_CMD_NOT_RQ);
    }
  },

  bridgeGenerateNumber(randomNumber) {
    if (randomNumber !== 0 && randomNumber !== 1) {
      throw new Error(ERROR.BRIDGE_GENERATOR_RANGE);
    }
  },
};

module.exports = Validate;
