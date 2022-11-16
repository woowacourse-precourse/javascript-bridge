const { MIN_BRIDGE_SIZE, MAX_BRIDGE_SIZE } = require('./lib/constants/bridge');
/**
 * 다리 건너기 게임 진행을 위해 입력받은 값의 유효성을 검사하는 역할을 한다.
 */
const BridgeValidator = {
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
  /**
   * @param {number} bridgeSize
   */
  validateBridgeSize(bridgeSizeInput) {
    if (this.isNotNumber(bridgeSizeInput)) {
      throw new Error(
        '[ERROR] 다리 길이를 위한 값에 숫자가 아닌 문자가 입력되었습니다.',
      );
    }

    if (this.isOutOfBound(parseInt(bridgeSizeInput, 10))) {
      throw new Error('[ERROR] 다리 길이는 3 이상 20 이하의 숫자여야 합니다.');
    }
  },

  /**
   * @param {string} inputValue 사용자로부터 입력받은 값
   * @returns {boolean} 숫자가 아닌 문자가 포함된 경우 true, 아니면 false를 반환한다.
   */
  isNotNumber(inputValue) {
    return !/^\d+$/.test(inputValue);
  },

  /**
   * @param {number} bridgeSize 사용자로부터 입력받은 다리의 길이
   * @returns {boolean} 다리 길이 범위 이외의 값이면 true, 아니면 false를 반환한다.
   */
  isOutOfBound(bridgeSize) {
    return bridgeSize < MIN_BRIDGE_SIZE || bridgeSize > MAX_BRIDGE_SIZE;
  },
};

module.exports = BridgeValidator;
