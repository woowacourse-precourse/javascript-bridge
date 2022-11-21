const GameProgress = require('../GameProgress');

const BridgeError = {
  throwErrorHandler(errorMessage, possibeError) {
    if (possibeError) {
      GameProgress.printErrorMessage(errorMessage);
      throw new Error();
    }
  },

  /**
 * @param {string} input 1 or 2 자리 숫자로 이루어진 문자열
 * @returns {boolean} 1 or 2 자리 숫자이면 true 아니면 false를 반환
 */
  isOneorTwoDigitNumber(input) {
    const VALID_NUM_REGEX = /^\d{1,2}$/;
    return VALID_NUM_REGEX.test(input);
  },

  isValidBridgeSize(size) {
    if (!this.isOneorTwoDigitNumber(size)) {
      return false;
    }
    const BRIDGE_LOWER_BOUND = 3;
    const BRIDGE_UPPER_BOUND = 20;
    return +(size) >= BRIDGE_LOWER_BOUND && +(size) <= BRIDGE_UPPER_BOUND;
  },

  isValidMoving(input) {
    const VALID_MOVING_REGEX = /^[U|D]{1}$/;
    return VALID_MOVING_REGEX.test(input);
  },

  isValidRetryInput(input) {
    const VALID_RETRY_INPUT = /^[R|Q]{1}$/;
    return VALID_RETRY_INPUT.test(input);
  },
};

module.exports = BridgeError;
