const MissionUtils = require('@woowacourse/mission-utils');
const UP = 'U';
const DOWN = 'D';

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
    const bridge = [];
    for (let x = 0; x < size; x++) {
      const randomNumbers = generateRandomNumber();
      const IS_UP = randomNumbers === 1;
      const IS_DOWN = randomNumbers === 0;

      if (IS_UP) bridge.push(UP);
      if (IS_DOWN) bridge.push(DOWN);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
