const ERROR_NOT_NUMBER = "[ERROR] 숫자를 입력해 주세요.";
const ERROR_OUT_OF_RANGE = "[ERROR] 3~20 사이의 숫자를 입력해 주세요.";
const ERROR_NOT_INTEGER = "[ERROR] 정수를 입력해 주세요.";

const SIZE_START = 3;
const SIZE_END = 20;

const BridgeSizeValidation = {
  /**
   * @param {number} number
   * 입력된 값이 빈 값이거나 숫자 타입이 아니면 예외를 발생시킨다.
   */
  validateIsNumber(number) {
    if ((number === "") | isNaN(number)) throw new Error(ERROR_NOT_NUMBER);
  },

  /**
   * @param {number} number
   * 범위 안의 숫자가 아니면 예외를 발생시킨다.
   */
  validateIsInRange(number) {
    if ((number < SIZE_START) | (number > SIZE_END)) throw new Error(ERROR_OUT_OF_RANGE);
  },

  /**
   * @param {number} number
   * 정수형이 아니면 예외를 발생시킨다.
   */
  validateIsInteger(number) {
    if (!Number.isInteger(number)) throw new Error(ERROR_NOT_INTEGER);
  },

  /**
   * 입력받은 다리 길이를 검증하여 예외를 발생시킨다.
   * @param {number} size
   */
  validateBridgeSize(size) {
    this.validateIsNumber(size);
    this.validateIsInteger(size);
    this.validateIsInRange(size);
  },
};

module.exports = BridgeSizeValidation;
