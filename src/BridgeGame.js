const { readMoving, readGameCommand } = require('./Views/InputView');
const { printMap, printResult } = require('./Views/OutputView');
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

  /**
   * 
   * @param {움직이는 다리의 위치} move 
   * @param {성공인지 실패인지를 알려주는 변수} check
   * 현재 건너고 있는 다리의 상태를 입력받아 그를 분류해주는 작업을 담당하는 함수이다.
   */
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

  /**
   * 
   * @param {U에 해당하는 다리 상태를 업데이트 하는 값} upperState 
   * @param {D에 해당하는 다리 상태를 업데이트 하는 값} downState 
   * 현재 게임에서의 다리 상태를 업데이트하는 기능을 담당하는 함수이다.
   */
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

  /**
   * 클래스에 대한 내용을 정리하는 기능을 담당하는 함수
   * tryCount를 1올릴고 게임의 상태를 초기화한다.
   */
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
