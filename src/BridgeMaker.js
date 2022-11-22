const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const RANDOM_LOWER_NUMBER = 0;
    const RANDOM_UPPER_NUMBER = 1;
    const LOWER_BLOCK = "D";
    const UPPER_BLOCK = "U";
    let bridge = [];

    for (let index = 0; index < size; index++) {
      const number = generateRandomNumber();
      if (number === RANDOM_LOWER_NUMBER) {
        bridge.push(LOWER_BLOCK);
      } else if (number === RANDOM_UPPER_NUMBER) {
        bridge.push(UPPER_BLOCK);
      }
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
