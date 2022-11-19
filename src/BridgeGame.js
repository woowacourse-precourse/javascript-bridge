const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const { BRIDGE_PRINT, BRIDGE_PATH } = require("./util/bridge");
const { generateRandomNumber } = require("./util/randomNumber");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  size = null;
  bridgePath = null;
  pathIndex = 0;
  firstLineResult = [];
  secondLineResult = [];

  setSize(currentSize) {
    this.size = currentSize;

    return this;
  }

  setBridge() {
    this.bridgePath = BridgeMaker.makeBridge(this.size, generateRandomNumber);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(choice, isAlrightPath) {
    this.pathIndex += 1;
    this.firstLineResult.push(
      choice === BRIDGE_PATH.up
        ? this.getPrintIsAlrightPath(isAlrightPath)
        : BRIDGE_PRINT.empty
    );
    this.secondLineResult.push(
      choice === BRIDGE_PATH.down
        ? this.getPrintIsAlrightPath(isAlrightPath)
        : BRIDGE_PRINT.empty
    );

    OutputView.printMap(this.firstLineResult, this.secondLineResult);
  }

  getIsAlrightPath(currentPath) {
    return this.bridgePath[this.pathIndex] === currentPath;
  }

  getPrintIsAlrightPath(isAlrightPath) {
    return isAlrightPath ? BRIDGE_PRINT.correct : BRIDGE_PRINT.incorrect;
  }

  checkIsEndBridge() {
    return this.pathIdx >= this.size;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.resetForRetry();
  }

  resetForRetry() {
    this.pathIndex = 0;
    this.firstLineResult = [];
    this.secondLineResult = [];
  }

  end() {
    OutputView.printMap(this.firstLineResult, this.secondLineResult, true);
  }
}

module.exports = BridgeGame;
