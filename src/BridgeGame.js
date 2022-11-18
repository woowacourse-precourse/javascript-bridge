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

  getIsAlrightPath(index, currentPath) {
    return this.bridgePath[index] === currentPath;
  }

  getPrintIsAlrightPath(isAlrightPath) {
    return isAlrightPath ? BRIDGE_PRINT.correct : BRIDGE_PRINT.incorrect;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  end() {}
}

module.exports = BridgeGame;
