const {
  BRIDGE_SIZE_START,
  BRIDGE_SIZE_END,
  ERROR_NOT_NUMBER,
  ERROR_OUT_OF_RANGE,
  ERROR_NOT_INTEGER,
} = require("../Utils");

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
    if ((number < BRIDGE_SIZE_START) | (number > BRIDGE_SIZE_END))
      throw new Error(ERROR_OUT_OF_RANGE);
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
