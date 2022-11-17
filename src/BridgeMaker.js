const { MOVEMENT_LOG_CODE } = require('./constants');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generator) {
    const bridge = [];
    while(bridge.length < size) {
      const result = Number(generator());
      if(result === BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE) bridge.push(MOVEMENT_LOG_CODE.PASSED.UPPER);
      if(result === BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE) bridge.push(MOVEMENT_LOG_CODE.PASSED.LOWER);
    }
    return bridge;
  },
}

module.exports = BridgeMaker;
