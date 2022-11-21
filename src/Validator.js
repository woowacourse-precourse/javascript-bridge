const {
  IS_SIZE_INPUT_ERROR,
  IS_MOVING_INPUT_ERROR,
  IS_RETRY_INPUT_ERROR,
} = require('./constants/errors');
const { FINAL_COMMAND_GROUP, POSITION } = require('./enums');

const Validator = {
  validateBridgeSizeInput: (bridgeSizeInput) => {
    if (!(Number(bridgeSizeInput) >= 3 && Number(bridgeSizeInput) <= 20)) {
      throw new Error(IS_SIZE_INPUT_ERROR);
    }
  },

  validateMoveInput: (moveInput) => {
    if (!(moveInput === POSITION.UP || moveInput === POSITION.DOWN)) {
      throw new Error(IS_MOVING_INPUT_ERROR);
    }
  },

  validateRetryInput: (retryInput) => {
    if (!(retryInput === FINAL_COMMAND_GROUP.RETRY || retryInput === FINAL_COMMAND_GROUP.QUIT)) {
      throw new Error(IS_RETRY_INPUT_ERROR);
    }
  },
};

module.exports = Validator;
