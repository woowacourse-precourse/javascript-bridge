const { BRIDGE_STRING } = require('./constants');

const BridgeMaker = {
  BRIDGE_LOCATION_MAP: {
    0: BRIDGE_STRING.down,
    1: BRIDGE_STRING.up,
  },

  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    while (bridge.length < size) {
      const number = generateRandomNumber();
      bridge.push(BridgeMaker.BRIDGE_LOCATION_MAP[number]);
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
