const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printMap } = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge;
    this.moveCount = 0;
    this.printTry = [[], []];
    this.tryCount = 1;
    this.restartCheck = false;
  }

  createBridge(bridgeLength) {
    this.bridgeLength = bridgeLength;
    this.bridge = makeBridge(bridgeLength, generate); //ex. ["U","D","D"]
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  moveUpCheck(moveValue) {
    if (moveValue === this.bridge[this.moveCount]) {
      this.printTry[0].push("O");
      this.printTry[1].push(" ");
      this.restartCheck = false;
    } else {
      this.printTry[0].push("X");
      this.printTry[1].push(" ");
      this.restartCheck = true;
    }
  }

  moveDownCheck(moveValue) {
    if (moveValue === this.bridge[this.moveCount]) {
      this.printTry[0].push(" ");
      this.printTry[1].push("O");
      this.restartCheck = false;
    } else {
      this.printTry[0].push(" ");
      this.printTry[1].push("X");
      this.restartCheck = true;
    }
  }

  moveValueCheck(moveValue) {
    if (moveValue === "U") {
      this.moveUpCheck(moveValue);
      printMap(this.printTry);
    } else {
      this.moveDownCheck(moveValue);
      printMap(this.printTry);
    }
  }

  move(moveValue) {
    if (this.moveCount <= this.bridge.length - 1) {
      this.moveValueCheck(moveValue);
      this.moveCount++;
    }
    return [this.moveCount, this.restartCheck, this.tryCount, this.printTry];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
