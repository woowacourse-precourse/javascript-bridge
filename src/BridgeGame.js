const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { printMap, printResult } = OutputView;
const { readMoving, readGameCommand } = InputView;
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge = null;
    this.moveMap = new Map([
      ["U", ""],
      ["D", ""],
    ]);
    this.attemptCount = 1;
  }

  setBridge(bridge) {
    this.bridge = bridge;
  }

  insertMoveMap(square, nowIndex) {
    const match = this.bridge[nowIndex] === square ? "O" : "X";
    this.moveMap.set(square, this.moveMap.get(square) + match);
    const other = square === "U" ? "D" : "U";
    this.moveMap.set(other, this.moveMap.get(other) + " ");
  }

  getMoveMap() {
    return this.moveMap;
  }

  getAttemptCount() {
    return this.attemptCount;
  }

  addAttemptCount() {
    this.attemptCount++;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(square) {
    const nowIndex = this.moveMap.get("U").length;
    this.insertMoveMap(square, nowIndex);
    printMap(this.moveMap);
    if (
      this.moveMap.get("U")[nowIndex] === "X" ||
      this.moveMap.get("D")[nowIndex] === "X"
    )
      readGameCommand(this);
    else if (this.bridge.length === nowIndex + 1) printResult(this, true);
    else readMoving(this);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.addAttemptCount();
    this.moveMap = new Map([
      ["U", ""],
      ["D", ""],
    ]);
    readMoving(this);
  }
}

module.exports = BridgeGame;
