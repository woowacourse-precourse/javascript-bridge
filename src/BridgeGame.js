const { readMoving, readGameCommand } = require('./InputView');
const { printMap, printResult } = require('./OutputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(state) {
    this.nowPosition = 0;
    this.tryCount = 1;
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
        printMap(this.nowBridge);
        if (this.bridgeState.length === this.nowPosition) return printResult('성공', this.nowBridge, this.tryCount);
        this.move();
        break;
      default:
        this.passBridge(move, 'X');
        printMap(this.nowBridge);
        this.retry();
    }
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
    this.nowBridge.upperBridge.push(upperState);
    this.nowBridge.downBridge.push(downState);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    let gameCommand = readGameCommand();
    switch(true) {
      case gameCommand === 'Q':
        printResult('실패', this.nowBridge, this.tryCount);
        break;
      default:
        clear();
        this.move();
    }
  }

  clear() {
    this.tryCount += 1;
    this.nowPosition = 0;
    this.nowBridge = {
      upperBridge: [],
      downBridge: [],
    }
  }
}

module.exports = BridgeGame;
