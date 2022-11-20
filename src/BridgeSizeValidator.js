/**
 * 사용자가 입력한 다리 길이의 유효성을 검사하는 역할을 한다.
 */
const BridgeSizeValidator = {
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,

  /**
   * 사용자가 입력한 다리 길이의 값에 대한 유효성을 검사하는 메서드
   * @param {number} bridgeSize
   * @throws 숫자가 아닌 문자가 포함된 경우 error를 throw한다.
   * @throws 다리 길이 범위 이외의 값인 경우 error를 throw한다.
   */
  validate(bridgeSizeInput) {
    if (this.isNotNumber(bridgeSizeInput)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 입력되었습니다.');
    }

    if (this.isOutOfBound(parseInt(bridgeSizeInput, 10))) {
      throw new Error(
        `[ERROR] 다리 길이는 ${this.MIN_BRIDGE_SIZE} 이상 ${this.MAX_BRIDGE_SIZE} 이하의 숫자여야 합니다.`,
      );
    }
  },

  /**
   * 사용자가 입력한 값에 숫자가 아닌 문자가 포함되는지 판단하는 메서드
   * @param {string} inputValue 사용자로부터 입력받은 값
   * @returns {boolean} 숫자가 아닌 문자가 포함된 경우 true, 아니면 false를 반환한다.
   */
  isNotNumber(inputValue) {
    return !/^\d+$/.test(inputValue);
  },

  /**
   * 사용자가 입력한 값이 다리 길이 범위 이외의 값인지 판단하는 메서드
   * @param {number} bridgeSize 사용자로부터 입력받은 다리의 길이
   * @returns {boolean} 다리 길이 범위 이외의 값이면 true, 아니면 false를 반환한다.
   */
  isOutOfBound(bridgeSize) {
    return (
      bridgeSize < this.MIN_BRIDGE_SIZE || bridgeSize > this.MAX_BRIDGE_SIZE
    );
  },
};

module.exports = BridgeSizeValidator;
