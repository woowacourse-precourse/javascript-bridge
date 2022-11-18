/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  LOWER_BRIDGE_NUMBER: 0,
  UPPER_BRIDGE_NUMBER: 1,
  LOWER_BRIDGE_LETTER: "D",
  UPPER_BRIDGE_LETTER: "U",

  validate(size) {
    if (size < 3 || size > 20) {
      throw new Error("[ERROR] 다리의 길이는 3~20 사이의 숫자여야 합니다.");
    }
  },

  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    this.validate(size);

    return Array.from({ length: size }, () => generateRandomNumber()).map((number) => {
      if (Number(number) === this.LOWER_BRIDGE_NUMBER) return this.LOWER_BRIDGE_LETTER;
      if (Number(number) === this.UPPER_BRIDGE_NUMBER) return this.UPPER_BRIDGE_LETTER;
    });
  },
};

module.exports = BridgeMaker;
