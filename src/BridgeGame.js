/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #myPosition = 0;
  #numberOfAttempt = 1;
  get myCurrentPosition() {
    return this.#myPosition;
  }

  get numberOfAttempt() {
    return this.#numberOfAttempt;
  }

  #isCorrectPath(toBeMoveDirection, answerPath) {
    return toBeMoveDirection === answerPath[this.#myPosition];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, answerPath) {
    if (this.#isCorrectPath(direction, answerPath)) {
      this.#myPosition += 1;
      return true;
    }
    this.#myPosition += 1;
    return false;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#initPosition();
    this.#numberOfAttempt += 1;
  }

  #initPosition() {
    this.#myPosition = 0;
  }
}

module.exports = BridgeGame;
