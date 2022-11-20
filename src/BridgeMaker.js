/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  isValidBridgeSize(input) {
    const validInRange = input >= 3 && input <= 20;
    if (validInRange) return input % 1 === 0;
    throw "[ERROR] 3과 20사이의 자연수가 아닙니다.";
  },

  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill(undefined).map((e) => {
      return Number(generateRandomNumber()) == 1 ? "U" : "D";
    });
  },
};

module.exports = BridgeMaker;
