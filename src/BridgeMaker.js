const { UTIL } = require('./utils/constant');

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * U 또는 D로 이루어진 정답 다리를 생성한다.
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const answer = generateRandomNumber();
      const crossable = this.whereCrossable(answer);
      bridge.push(crossable);
    }
    return bridge;
  },

  /**
   * 무작위 값으로 생성된 정수값에 해당하는 문자를 반환한다.
   * @param {number} answer 무작위로 생성된 정수값
   * @returns {string} 무작위 값에 해당하는 U 또는 D 문자
   */
  whereCrossable(answer) {
    if (answer === 0) return UTIL.DOWN;
    return UTIL.UP;
  },
};

module.exports = BridgeMaker;
