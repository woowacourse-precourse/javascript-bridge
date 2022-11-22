const { SPACE_TO_MOVE } = require("./Utils");
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

    for (let idx = 0; idx < size; idx++) {
        bridge.push(generateRandomNumber());
      }
    return BridgeMaker.changeBridge(bridge)
  },

  changeBridge(bridge) {
    const remakeBridge = [];

    bridge.forEach((space) => {
      if (space === 0) remakeBridge.push(SPACE_TO_MOVE.MOVE_DOWN);
      if (space === 1) remakeBridge.push(SPACE_TO_MOVE.MOVE_UP);
    })
    return remakeBridge;
  },
};

module.exports = BridgeMaker;
