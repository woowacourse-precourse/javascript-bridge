const { ERROR_MSG } = require('../common/Constant');
const { prefix, isNotANumber, isOutOfRange, isNotUpOrDown, isNotRetryOrQuit } =
  ERROR_MSG;

/**
 * 사용자 입력 유효성 검사 역할을 한다.
 */
const Validator = {
  /**
   * 다리 길이 입력 유효성을 검사한다.
   * @param {number} number
   */
  validateBridgeSize(number) {
    Validator.validateNumber(number);
    Validator.validateNumberRange(number);
  },

  /**
   * 숫자가 아니면 throw Error
   * @param {number} number
   */
  validateNumber(number) {
    if (/\D+/g.test(number)) throw prefix + isNotANumber;
  },

  /**
   * 3 미만, 20 초과시 throw Error
   * @param {number} number
   */
  validateNumberRange(number) {
    if (number < 3 || 20 < number) throw prefix + isOutOfRange;
  },

  /**
   * U, D 외의 값이 입력될 경우 throw Error
   * @param {string} dir
   */
  validateMove(dir) {
    if (dir.length !== 1 || /[^UD]/.test(dir)) throw prefix + isNotUpOrDown;
  },

  /**
   * R, Q 외의 값이 입력될 경우 throw Error
   * @param {string} msg
   */
  validateRetry(msg) {
    if (msg.length !== 1 || /[^RQ]/.test(msg)) throw prefix + isNotRetryOrQuit;
  },
};

module.exports = Validator;
