const {
  BRIDGE_UP,
  BRIDGE_DOWN,
  ERROR_NOT_UPPER_CASE,
  ERROR_UNEXPECTED_MOVING,
} = require("../Utils");

const MovingValidation = {
  /**
   * 소문자로 입력했을 때 예외를 발생시킨다.
   * @param {string} string
   * @throws
   */
  validateIsUpperCase(string) {
    if (["u", "d"].includes(string)) throw new Error(ERROR_NOT_UPPER_CASE);
  },

  /**
   * U 또는 D가 아닌 경우 예외를 발생시킨다.
   * @param {string} string
   * @throws
   */
  validateIsExpected(string) {
    if (![BRIDGE_UP, BRIDGE_DOWN].includes(string))
      throw new Error(ERROR_UNEXPECTED_MOVING);
  },

  /**
   * 입력받은 이동할 칸을 검증하여 예외를 발생시킨다.
   * @param {string} string
   */
  validateMoving(string) {
    this.validateIsUpperCase(string);
    this.validateIsExpected(string);
  },
};

module.exports = MovingValidation;
