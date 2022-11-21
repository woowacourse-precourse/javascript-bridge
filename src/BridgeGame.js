const { BRIDGE_DETAIL } = require("./constant/Constant");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  count = 0;
  printArr = [];
  tries = 1;
  constructor(bridge) {
    this.bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userCommand) {
    const moveResult = this.compareCommandAndBridge(userCommand);
    return moveResult;
  }

  compareCommandAndBridge(userCommand) {
    const compareResult = userCommand === this.bridge[this.count];
    this.count += 1;
    if (compareResult) {
      this.toPrintBridge.bind(this)(compareResult, userCommand);
      if (this.count === this.bridge.length) return "END";
      return true;
    } else {
      this.toPrintBridge.bind(this)(compareResult, userCommand);
      return false;
    }
  }

  toPrintBridge(compareResult, userCommand) {
    const compareResultToPrint = compareResult ? "O" : "X";
    this.printArr = [...this.printArr, { compareResultToPrint, userCommand }];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(userInput) {
    const result = this.checkRetryOrEnd(userInput);
    this.count = 0;
    return result;
  }

  checkRetryOrEnd(userAnswer) {
    if (userAnswer === BRIDGE_DETAIL.RETRY_COMMAND) {
      this.printArr = [];
      this.tries += 1;
      return userAnswer;
    }
    if (userAnswer === BRIDGE_DETAIL.END_COMMAND) {
      return userAnswer;
    }
  }
}

module.exports = BridgeGame;
