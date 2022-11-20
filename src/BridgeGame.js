const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  count = 0;
  printArr = [];
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.getUpDownCommand();
    console.log(this.bridge);
  }

  getUpDownCommand() {
    InputView.readMoving(this.compareCommandAndBridge.bind(this));
  }

  compareCommandAndBridge(userCommand) {
    const compareResult = userCommand === this.bridge[this.count];
    if (compareResult) {
      this.printBridge.bind(this)(compareResult, userCommand);
      this.count += 1;
      this.getUpDownCommand();
    } else {
      this.printBridge.bind(this)(compareResult, userCommand);
      this.count = 0;
      this.retry.bind(this)();
    }
    console.log(this.count);
  }

  printBridge(compareResult, userCommand) {
    const compareResultToPrint = compareResult ? "O" : "X";
    this.printArr = [...this.printArr, { compareResultToPrint, userCommand }];
    OutputView.printMap(this.printArr);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    console.log("다시시도에용");
  }

  makeBridge(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.bridge = bridge;
    this.move();
  }

  play() {
    OutputView.printStart();
    this.getBridge();
  }

  getBridge() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }
}

module.exports = BridgeGame;
