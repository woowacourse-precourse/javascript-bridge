const { Console } = require('@woowacourse/mission-utils');
const {
  IS_SIZE_INPUT_ERROR,
  IS_MOVING_INPUT_ERROR,
  IS_RETRY_INPUT_ERROR,
} = require('./constants/errors');
const { FINAL_COMMAND_GROUP, POSITION, BRIDGE_SIZE_RANGE } = require('./enums');

const Validator = {
  validateBridgeSizeInput: (bridgeSizeInput) => {
    if (
      !(
        Number(bridgeSizeInput) >= BRIDGE_SIZE_RANGE.MIN &&
        Number(bridgeSizeInput) <= BRIDGE_SIZE_RANGE.MAX
      )
    ) {
      throw new Error(IS_SIZE_INPUT_ERROR);
    }
    return true;
  },

  validateMoveInput: (moveInput) => {
    if (!(moveInput === POSITION.UP || moveInput === POSITION.DOWN)) {
      throw IS_MOVING_INPUT_ERROR;
    }
    return true;
  },

  validateRetryInput: (retryInput) => {
    if (!(retryInput === FINAL_COMMAND_GROUP.RETRY || retryInput === FINAL_COMMAND_GROUP.QUIT)) {
      throw IS_RETRY_INPUT_ERROR;
    }
    return true;
  },
};

module.exports = Validator;
