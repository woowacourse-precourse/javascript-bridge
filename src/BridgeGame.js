/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(moving, location) {
    const isSuccess = this.#bridge[location] === moving;

    return isSuccess;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.retry();
  }

  get() {
    return this.#bridge;
  }
}

module.exports = BridgeGame;
