const { BRIDGE_SIZE } = require('./assets/constants');
const { ERROR } = require('./controller/Error');
/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    this.vaildateBridgeSize(size);
    return Array.from({ length: size }, () => generateRandomNumber() === 0 ? 'D' : 'U');
  },

  /**
 * 다리 길이가 유효 값인지 확인하는 메서드
 * @param {number} size 다리 길이
 */
  vaildateBridgeSize(size) {
    if (isNaN(size))
      throw new Error(ERROR.BRIDGE_SIZE_NOT_NUMBER);
    if (size < BRIDGE_SIZE.MIN || size > BRIDGE_SIZE.MAX)
      throw new Error(ERROR.BRIDGE_SIZE_OUT_BOUNDARY);
  }
};

module.exports = BridgeMaker;
