/**
 * 다리 건너기 게임을 관리하는 클래스
 * BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
제공된 BridgeGame 클래스를 활용해 구현해야 한다.
BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
BridgeGame의 파일 경로는 변경할 수 있다.
BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다. 
*/
const MissionUtils = require('@woowacourse/mission-utils');

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  constructor() {
    this.rightBridge = [];
    this.copy = [];
    this.bridegeUp = [];
    this.bridegeDown = [];
    this.tryCount = 1;
    this.selectCount = 0;
  }
  bridgeMake(bridge) {
    this.rightBridge = [...bridge];
    this.copy = [...bridge];
  }
  move(answer) {
    this.blankAdd();
    //rightBridge 길이와 횟수가 같으면 끝났다고 리턴
    return this.checkAnswer(answer);
  }

  checkAnswer(answer, result = false) {
    if (this.copy[0] === answer) {
      answer === 'U'
        ? (this.bridegeUp.push('O'), this.bridegeDown.push(' '))
        : (this.bridegeUp.push(' '), this.bridegeDown.push('O'));
      this.copy.shift();
      result = true;
      this.selectCount++;
      return result;
    }
    this.worongAnswer(answer);
    return result;
  }
  worongAnswer(answer) {
    answer === 'U'
      ? (this.bridegeUp.push('X'), this.bridegeDown.push(' '))
      : (this.bridegeUp.push(' '), this.bridegeDown.push('X'));
  }
  blankAdd() {
    if (this.bridegeUp.length > 0) {
      this.bridegeUp.push('|'), this.bridegeDown.push('|');
    }
    return;
  }

  retry() {
    this.copy = [...this.rightBridge];
    this.bridegeUp = [];
    this.bridegeDown = [];
    this.tryCount++;
    this.selectCount = 0;
  }
  gameOver() {
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
