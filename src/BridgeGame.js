/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeGameStatus = {
    myPosition: 0,
    numberOfAttempt: 1,
  };

  getMyCurrentPosition() {
    return this.#bridgeGameStatus.myPosition;
  }

  getNumberOfAttempt() {
    return this.#bridgeGameStatus.numberOfAttempt;
  }

  #isCorrectPath(toBeMoveDirection, answerPath) {
    return toBeMoveDirection === answerPath[this.#bridgeGameStatus.myPosition];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, answerPath) {
    if (this.#isCorrectPath(direction, answerPath)) {
      this.#bridgeGameStatus.myPosition += 1;
      return true;
    }
    this.#bridgeGameStatus.myPosition += 1;
    return false;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#initPosition();
    this.#bridgeGameStatus.numberOfAttempt += 1;
  }

  #initPosition() {
    this.#bridgeGameStatus.myPosition = 0;
  }
}

module.exports = BridgeGame;
