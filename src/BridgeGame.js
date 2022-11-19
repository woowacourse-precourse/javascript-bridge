/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #count = 1;
  #index = 0;
  #randomBridge;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  get index() {
    return this.#index;
  }

  get retryCount() {
    return this.#count;
  }

  increaseCount() {
    return this.#count++;
  }

  increaseIndex() {
    return this.#index++;
  }

  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#index = 0;
    this.#count++;
  }
}

module.exports = BridgeGame;
