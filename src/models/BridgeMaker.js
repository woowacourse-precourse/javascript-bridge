/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 * 주의 : 변경 없이 그대로 사용할 것.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   */
  makeBridge(size, generateRandomNumber) {
    let bridge = []; // 생성된 다리
    while (bridge.length < size) {
      +generateRandomNumber() ? bridge.push("U") : bridge.push("D");
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
