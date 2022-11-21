const {
  IS_SIZE_INPUT_ERROR,
  IS_MOVING_INPUT_ERROR,
  IS_RETRY_INPUT_ERROR,
} = require('./constants/errors');

const Validator = {
  validateBridgeSizeInput: (bridgeSizeInput) => {
    if (!(Number(bridgeSizeInput) >= 3 && Number(bridgeSizeInput) <= 20)) {
      throw new Error(IS_SIZE_INPUT_ERROR);
    }
  },

  validateMoveInput: (moveInput) => {
    if (!(moveInput === 'U' || moveInput === 'D')) {
      throw new Error(IS_MOVING_INPUT_ERROR);
    }
  },

  validateRetryInput: (retryInput) => {
    if (!(retryInput === 'R' || retryInput === 'Q')) {
      throw new Error(IS_RETRY_INPUT_ERROR);
    }
  },
};

module.exports = Validator;
