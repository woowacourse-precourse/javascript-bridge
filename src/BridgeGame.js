const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const OutputView = require('./OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  count = 1;
  result = '성공';
  bridge = BridgeMaker.makeBridge();
  userStep = [];
  matchMap = [];
  upBridge = [];
  downBridge = [];

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    //let upBridge = [];
    //let downBridge = [];
    for (let i = 0; i < this.userStep.length; i++) {
      if (
        this.userStep[i] === 'U' &&
        (this.matchMap[i] === 'O' || this.matchMap[i] === 'X')
      ) {
        upBridge.push(this.matchMap[i]);
        downBridge.push(' ');
      }
      if (
        this.userStep[i] === 'D' &&
        (this.matchMap[i] === 'O' || this.matchMap[i] === 'X')
      ) {
        downBridge.push(this.matchMap[i]);
        upBridge.push(' ');
      }
      OutputView.printMap();
    }
    //return [upBridge, downBridge];
  }

  // 일단 O인지 X인지 거르기
  match(bridge, userMoving) {
    this.userStep.push(userMoving);
    for (let i = 0; i < this.userStep.length; i++) {
      if (this.bridge[i] === this.userStep[i]) {
        this.matchMap.push('O');
      }
      this.matchMap.push('X');
      this.retry;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    const askRetry = InputView.readGameCommand();
    if (askRetry === 'R') {
      this.count += 1;
      InputView.readMoving;
    }
    this.result = '실패';
    OutputView.printResult;
  }
}

module.exports = BridgeGame;
