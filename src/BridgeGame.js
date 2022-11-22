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
    this.bridgeIdx = 0;
    this.bridgeUp = [];
    this.bridgeBottom = [];
  }

  move(userInput) {
    if (this.answerBridge[this.bridgeIdx] === userInput) {
      this.bridgeIdx += 1
      return true;
    }
    return false;
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {};

  moveSuccess() {
    if (this.answerBridge[this.bridgeIdx] === 'U') {
      this.bridgeUp.push('O');
      this.bridgeBottom.push(' ');
    } else {
      this.bridgeUp.push(' ');
      this.bridgeBottom.push('O');
    };
  };

  moveFail() {
    if (this.answerBridge[this.bridgeIdx] === 'U') {
      this.bridgeUp.push('X');
      this.bridgeBottom.push(' ');
    } else {
      this.bridgeUp.push(' ');
      this.bridgeBottom.push('X');
    };

  };

  makeBridgeResult(count) {
    const bridgeResult = `[ ${this.bridgeUp.join(' | ')} ]\n[ ${this.bridgeBottom.join(' | ')} ]`;
    OutputView.printMap(bridgeResult);
  };
}

module.exports = BridgeGame;
