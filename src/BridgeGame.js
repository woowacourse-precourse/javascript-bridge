/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #location;
  #tryCount;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#location = 0;
    this.#tryCount = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(moving) {
    const isSuccess = this.#bridge[this.#location] === moving;

    this.#location += 1;

    return isSuccess;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry(moving) {
    this.#location = 0;
    this.#tryCount += 1;

    moving();
  }

  getBridge() {
    return this.#bridge;
  }

  getLocation() {
    return this.#location;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
