const { printMap } = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge = null;
    this.bridgeMap = { U: [], D: [] };
    this.count = 0;
  }

  setBridge(bridge) {
    this.bridge = bridge;
    console.log(this.bridge);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    this.paintMap(input);
    printMap(this.bridgeMap);
    this.judgeNextGame();
  }

  paintMap(input) {
    const curIdx = this.bridgeMap.U.length;
    const check = this.bridge[curIdx] === input ? "O" : "X";
    this.bridgeMap[input].push(check);
    const other = input === "U" ? "D" : "U";
    this.bridgeMap[other].push(" ");
  }
  judgeNextGame() {
    const curIdx = this.bridgeMap.U.length;
    if (this.bridgeMap.U[curIdx] === "X" || this.bridgeMap.D[curIdx] === "X") {
      return readGameCommand(this.bridge);
    }
    if (curIdx + 1 === this.bridge.length) {
      return "win";
    }
    return readMoving(this.bridge);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
