const { BRIDGE } = require('../constants/game.constants');
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
    const bridgeShape = [];
    for (let idx = 0; idx < size; idx += 1) {
      bridgeShape.push( generateRandomNumber() ? BRIDGE.UP : BRIDGE.DOWN);
    }
    return bridgeShape;
  },
};

module.exports = BridgeMaker;
