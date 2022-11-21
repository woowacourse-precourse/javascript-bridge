const { IS_SIZE_INPUT_ERROR, IS_MOVING_INPUT_ERROR } = require('./constants/errors');

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
    // todo: "R", "Q"
    // throw new Error('다리 길이 입력이 유효하지 않습니다.');
  },
};

module.exports = Validator;
