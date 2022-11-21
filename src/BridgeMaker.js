const { 
  GAME_STRING,
  BRIDGE,
  GAME_NUMBER,
} = require('./Constants/constant');
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
    for (let i = GAME_NUMBER.startIndex; i < size; i++) {
      const randomNum = generateRandomNumber();
      if (randomNum === BRIDGE.up) {
        bridge.push(GAME_STRING.upBridge);
      } else {
        bridge.push(GAME_STRING.downBridge);
      }
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
