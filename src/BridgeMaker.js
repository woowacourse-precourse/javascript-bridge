const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MOVE } = require('./constant/constant');

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
    const bridge = Array.from(Array(2), () => Array(size).fill(''));
    for (let bridgeIndex; bridgeIndex < size; bridgeIndex += 1) {
      const upOrDown = generateRandomNumber();
      if (upOrDown === 1) bridge[0][bridgeIndex] = MOVE.UP;
      if (upOrDown === 0) bridge[1][bridgeIndex] = MOVE.DOWN;
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
