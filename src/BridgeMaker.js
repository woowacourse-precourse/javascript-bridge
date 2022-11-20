/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  //무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.
  makeBridge(size, generateRandomNumber) {
    const RESULT = [];
    for (let i = 0; i < size; i++) {
      const RANDOM = generateRandomNumber().toString();
      RANDOM === '0' ? RESULT.push('D') : RESULT.push('U');
    }
    return RESULT;
  },
};

module.exports = BridgeMaker;
