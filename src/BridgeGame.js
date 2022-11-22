/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeMap;
  #currentPosition;
  #numberOfAttempts;

  constructor() {
    this.#bridge = [];
    this.#currentPosition = 0;
    this.#numberOfAttempts = 1;
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  getCurrentPosition() {
    return this.#currentPosition;
  }
  
  getBridgeMap() {
    return this.#bridgeMap;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move() {
    this.#currentPosition += 1;
    this.setBridgeMap();
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.#currentPosition = 0;
    this.#numberOfAttempts += 1;
  }
}

module.exports = BridgeGame;
