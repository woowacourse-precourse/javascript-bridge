/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  BRIDGE_DIRECTION_UP: "U",
  BRIDGE_DIRECTION_DOWN: "D",
  STRING_TO_UP: "0",
  STRING_TO_DOWN: "1",
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const randomNumberByString = generateRandomNumber().toString();
      BridgeMaker.pushConvertedNumberToBridge(randomNumberByString, bridge);
    }
    return bridge;
  },
  /**
   * 무작위 값을 생성해주는 함수를 통해 생성된 무작위 값의 문자열을 다리 모양으로 변환한다.
   * @param {string} randomNumberByString 무작위 값을 생성해주는 함수를 통해 생성된 무작위 값의 문자열
   * @param {string[]} bridge 다리 모양을 저장할 배열
   */
  pushConvertedNumberToBridge(randomNumberByString, bridge) {
    if (randomNumberByString === BridgeMaker.STRING_TO_UP) {
      bridge.push(BridgeMaker.BRIDGE_DIRECTION_UP);
    }
    if (randomNumberByString === BridgeMaker.STRING_TO_DOWN) {
      bridge.push(BridgeMaker.BRIDGE_DIRECTION_DOWN);
    }
  },
};

module.exports = BridgeMaker;
