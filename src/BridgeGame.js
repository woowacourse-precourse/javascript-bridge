const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  count = 1;
  result = '성공';
  //bridge = BridgeMaker.makeBridge();

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const matching = this.match();
    const userStep = matching[0];
    const matchMap = matching[1];
    let upBridge = [];
    let downBridge = [];
    for (let i = 0; i < userStep.length; i++) {
      if (userStep[i] === 'U' && (matchMap[i] === 'O' || matchMap[i] === 'X')) {
        upBridge.push(matchMap[i]);
        downBridge.push(' ');
      }
      if (userStep[i] === 'D' && (matchMap[i] === 'O' || matchMap[i] === 'X')) {
        downBridge.push(matchMap[i]);
        upBridge.push(' ');
      }
    }
    return [upBridge, downBridge];
  }

  // 일단 O인지 X인지 거르기
  match(bridge, userMoving) {
    let matchMap = [];
    let userStep = [];
    userStep.push(userMoving);
    for (let i = 0; i < userStep.length; i++) {
      if (bridge[i] === userStep[i]) {
        matchMap.push('O');
      }
      matchMap.push('X');
      this.notMatched();
    }
    return [userStep, matchMap];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
