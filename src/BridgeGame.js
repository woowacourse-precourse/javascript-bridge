const { readMoving } = require('./InputView');
const { printResult } = require('./OutputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(state) {
    this.nowPosition = 0;
    this.tryCount = 0;
    this.bridgeState = state;
    this.nowBridge = {
      upperBridge: [],
      downBridge: [],
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    let move = readMoving();
    switch(true) {
      case this.bridgeState[this.nowPosition] === move:
        this.passBridge(move, 'O');
        break;
      default:
        this.passBridge(move, 'X');
    }
    if (this.nowPosition === this.bridgeState.length) printResult('성공', this.nowBridge, this.tryCount);
    this.move();
  }

  passBridge(move, check) {
    this.nowPosition += 1;
    switch(true) {
      case move === 'U':
        this.updateNowBridge(check, ' ');
        break;
      case move === 'D':
        this.updateNowBridge(' ', check);
        break;
    }
  }

  updateNowBridge(upperState, downState) {
    this.nowBridge[upperBridge].push(upperState);
    this.nowBridge[downBridge].push(downState);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
