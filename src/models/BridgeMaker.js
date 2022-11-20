const BridgeMaker = {
  /**
   * 다리를 생성하는 함수
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @returns 다리를 표현하는 배열
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
