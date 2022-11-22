/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeLengthStatus = 0;

  #numberOftry = 1;

  #GAME_OPTION = {
    RETRY: 'R',
    QUIT: 'Q',
  };

  initBridgeLengthStatus() {
    this.#bridgeLengthStatus = 0;
  }

  getBridgeLengthStatus() {
    return this.#bridgeLengthStatus;
  }

  getNumberOfTry() {
    return this.#numberOftry;
  }

  incrementNumberOfTry() {
    this.#numberOftry += 1;
  }

  incrementBridgeLengthStatus() {
    this.#bridgeLengthStatus += 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, bridge) {
    if (bridge[this.#bridgeLengthStatus] === input) {
      this.incrementBridgeLengthStatus();
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if (input === this.#GAME_OPTION.RETRY) return true;
    return false;
  }
}

module.exports = BridgeGame;
