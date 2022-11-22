/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const OutputView = require('./OutputView');

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  constructor(answerBridge) {
    this.answerBridge = answerBridge;
    this.state = 'doing';
    this.count = 1;
    this.bridgeResult = '';
    this.bridgeIdx = 0;
    this.bridgeUp = [];
    this.bridgeBottom = [];
  }

  move(userInput) {
    if (this.answerBridge[this.bridgeIdx] === userInput) {
      return true;
    } else {
      return false;
    };
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.bridgeIdx = 0;
    this.bridgeUp = [];
    this.bridgeBottom = [];
    this.count += 1;
  };

  moveSuccess() {
    if (this.answerBridge[this.bridgeIdx] === 'U') {
      this.bridgeUp.push('O');
      this.bridgeBottom.push(' ');
    } else {
      this.bridgeUp.push(' ');
      this.bridgeBottom.push('O');
    };

    this.makeBridgeResult();
    OutputView.printMap(this.bridgeResult);
  };

  moveFail() {
    if (this.answerBridge[this.bridgeIdx] === 'U') {
      this.bridgeUp.push(' ');
      this.bridgeBottom.push('X');
    } else {
      this.bridgeUp.push('X');
      this.bridgeBottom.push(' ');
    };

    this.makeBridgeResult();
    OutputView.printMap(this.bridgeResult);
  };

  makeBridgeResult() {
    this.bridgeResult = `[ ${this.bridgeUp.join(' | ')} ]\n[ ${this.bridgeBottom.join(' | ')} ]`;
    this.bridgeIdx += 1
  };

  checkSuccess() {
    if (this.bridgeIdx === this.answerBridge.length) {
      return true;
    } else {
      return false;
    }
  };

  printSuccess() {
    OutputView.printResult(this.bridgeResult, true, this.count);
  };

  printFail() {
    OutputView.printResult(this.bridgeResult, false, this.count);
  };
}

module.exports = BridgeGame;
