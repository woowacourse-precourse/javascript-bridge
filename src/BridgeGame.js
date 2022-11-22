const OutputView = require('./OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  FAIL_MESSAGE = '실패';
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(userAnswer) {
    OutputView.printMap(userAnswer);
  }

  fail(userAnswer) {
    OutputView.printIncorrect(userAnswer);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(userAnswer, count) {
    if (userAnswer === 'R') {
      return OutputView.removeArray();
    }
    if (userAnswer === 'Q') {
      return OutputView.printResult(this.FAIL_MESSAGE, count);
    }
  }
}

module.exports = BridgeGame;
