/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  LOWER_BRIDGE_NUMBER: 0,
  UPPER_BRIDGE_NUMBER: 1,
  LOWER_BRIDGE_LETTER: "D",
  UPPER_BRIDGE_LETTER: "U",

  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => generateRandomNumber()).map((number) => {
      if (number === this.LOWER_BRIDGE_NUMBER) return this.LOWER_BRIDGE_LETTER;
      if (number === this.UPPER_BRIDGE_NUMBER) return this.UPPER_BRIDGE_LETTER;
    });
  },
};

module.exports = BridgeMaker;
