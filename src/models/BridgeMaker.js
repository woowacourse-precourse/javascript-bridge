/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 * 주의 : 변경 없이 그대로 사용할 것.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @param {function()} readMoving 사용자가 이동할 칸을 입력받는 함수
   * @param {BridgeGame} game 현재 진행 중인 게임(인스턴스)
   */
  makeBridge(size, generateRandomNumber, readMoving, game) {
    // 생성된 다리
    let bridge = [];
    while (bridge.length < size) {
      +generateRandomNumber() ? bridge.push("U") : bridge.push("D");
    }
    try {
      readMoving(game, bridge);
    } catch {}
    console.log("사이즈", size);
    console.log("만들어진 다리", bridge);
    return bridge;
  },
};

module.exports = BridgeMaker;
