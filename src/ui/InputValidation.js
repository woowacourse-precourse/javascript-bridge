const {
  MOVING_LIST,
  REPLAY_INPUT_LIST,
  MAX_BRIDGE_SIZE,
  MIN_BRIDGE_SIZE,
} = require('../constant/constants');
const { ERR_NOT_NUM, ERR_MOVING_INVALID, ERR_REPLAY_INVALID } = require('../constant/Error');

const InputValidation = {
  validateBridgeSize(input) {
    const input_int = parseInt(input);
    if (input_int % 1 !== 0 || isNaN(input)) {
      throw new Error(ERR_NOT_NUM);
    }
    if (MIN_BRIDGE_SIZE > input_int || input_int > MAX_BRIDGE_SIZE) {
      throw new Error(ERR_NOT_NUM);
    }
    return input_int;
  },
  validateMoving(input) {
    if (!MOVING_LIST.includes(input)) {
      throw new Error(ERR_MOVING_INVALID);
    }
  },
  validateReplay(input) {
    if (!REPLAY_INPUT_LIST.includes(input)) {
      throw new Error(ERR_REPLAY_INVALID);
    }
  },
};

module.exports = InputValidation;
