const { ERROR } = require('./Constants');

const Validation = {
  isValidBridgeSize(bridgeSize) {
    if (!bridgeSize) return;
    if (bridgeSize.match(/[^0-9]/g)) {
      throw new Error(ERROR.BRIDGE_SIZE_MUST_BE_NUMBER);
    }
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(ERROR.BRIDGE_SIZE_MUST_BE_3_TO_20);
    }
  },

  isValidMoving(moving) {
    if (!moving) return;
    if (moving.length >= 2 || moving.length < 1) {
      throw new Error(ERROR.MOVING_MUST_BE_ONE_LETTER);
    }
    if (moving.match(/[^DU]/g)) {
      throw new Error(ERROR.MOVING_MUST_BE_U_OR_D);
    }
  },

  isValidCommand(command) {
    if (!command) return;
    if (command.length >= 2 || command.length < 1) {
      throw new Error(ERROR.COMMAND_MUST_BE_ONE_LETTER);
    }
    if (moving.match(/[^RQ]/g)) {
      throw new Error(ERROR.COMMAND_MUST_BE_R_OR_Q);
    }
  },
}

module.exports = Validation;