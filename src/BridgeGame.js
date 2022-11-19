const OutputView = require('./OutputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  count = 0;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(inputLetter, answerArr) {
    if (this.count < answerArr.length) {
      if (inputLetter === answerArr[this.count])
        return this.moveIfCorrect(inputLetter);
      if (inputLetter !== answerArr[this.count])
        return this.moveIfWrong(inputLetter);
    }
  }

  moveIfCorrect(inputLetter) {
    this.count++;
    console.log('정답');
    this.answer = true;
    OutputView.printMap(this.answer, inputLetter);
  }

  moveIfWrong(inputLetter) {
    this.count++;
    console.log('탈락!');
    this.answer = false;
    OutputView.printMap(this.answer, inputLetter);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
