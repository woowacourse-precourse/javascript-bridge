const {
  MOVING_LIST,
  REPLAY_INPUT_LIST,
  MAX_BRIDGE_SIZE,
  MIN_BRIDGE_SIZE,
} = require('../constant/constants');
const { ERR_NOT_NUM, ERR_MOVING_INVALID, ERR_REPLAY_INVALID } = require('../constant/Error');

const InputValidation = {
  /**
   * 다리 길이를 입력받을 때, 검증하여 정수형으로 반환한다
   * @param {string} input
   * @returns {int} input_int
   */
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
  /**
   * 이동할 때, 사용자의 입력을 검증한다
   * @param {string} input
   */
  validateMoving(input) {
    if (!MOVING_LIST.includes(input)) {
      throw new Error(ERR_MOVING_INVALID);
    }
  },
  /**
   * 1회 시도가 종료되었을 때, 사용자의 입력을 검증한다
   * @param {string} input
   */
  validateReplay(input) {
    if (!REPLAY_INPUT_LIST.includes(input)) {
      throw new Error(ERR_REPLAY_INVALID);
    }
  },
};

module.exports = InputValidation;
