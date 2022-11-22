const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_INFO } = require('./constants/BridgeGameSetting');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size) {
    const result = [];
    for (let i = 0; i < size; i += 1) {
      result.push(BridgeRandomNumberGenerator.generate());
    }
    result.forEach((number, idx) => {
      if (number === BRIDGE_INFO.RANDOM_UP) {
        result[idx] = BRIDGE_INFO.SELECT_UP;
      }
      if (number === BRIDGE_INFO.RANDOM_DOWN) {
        result[idx] = BRIDGE_INFO.SELECT_DOWN;
      }
      return result;
    });
  },
};

Console.print(BridgeMaker.makeBridge(5));

module.exports = BridgeMaker;
