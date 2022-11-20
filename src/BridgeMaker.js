const { Console } = require('@woowacourse/mission-utils');

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
    const RANDOM_UPPER_BLOCK = '1';
    const RANDOM_LOWER_BLOCK = '0';
    const UPPER_BLOCK = 'U';
    const LOWER_BLOCK = 'D';
    let bridge = [];

    for (let index = 0; index < size; index++) {
      const randomNumbers = generateRandomNumber();
      if (randomNumbers.toString() === RANDOM_UPPER_BLOCK) {
        bridge.push(UPPER_BLOCK);
        continue;
      }
      if (randomNumbers.toString() === RANDOM_LOWER_BLOCK) {
        bridge.push(LOWER_BLOCK);
      }
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
