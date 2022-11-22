const { BRIDGE, REPEAT_START, DECIMAL } = require("./constants/data");
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
    let bridge = [];
    for (let zoneNumber = REPEAT_START; zoneNumber < size; zoneNumber++) {
      const randomNumber = parseInt(generateRandomNumber(), DECIMAL);
      if (randomNumber === BRIDGE.LOWER_ZONE_NUMBER)
        bridge.push(BRIDGE.LOWER_ZONE);
      if (randomNumber === BRIDGE.UPPER_ZONE_NUMBER)
        bridge.push(BRIDGE.UPPER_ZONE);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
