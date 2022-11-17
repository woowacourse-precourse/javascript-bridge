/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  RANDOM_LOWER_BLOCK: 0,
  RANDOM_UPPER_BLOCK: 1,
  LOWER_BLOCK: "D",
  UPPER_BLOCK: "U",
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    return new Array(size)
      .fill(0)
      .map(() => {
        return (generateRandomNumber.generate() === this.RANDOM_UPPER_BLOCK) ?
          this.UPPER_BLOCK : this.LOWER_BLOCK;
      });
  },
};

module.exports = BridgeMaker;
