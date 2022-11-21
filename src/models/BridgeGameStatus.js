/**
 * 다리 건너기 게임 상태 클래스
 * @class
 */
class BridgeGameStatus {
  static #INITIAL_LOCATION = -1;

  static #INITIAL_TRY_COUNT = 0;

  #location = BridgeGameStatus.#INITIAL_LOCATION;

  #tryCount = BridgeGameStatus.#INITIAL_TRY_COUNT;

  /**
   * 위치 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getLocation() {
    return this.#location;
  }

  /**
   * 시도 횟수 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getTryCount() {
    return this.#tryCount;
  }

  /**
   * 위치 증가할 때 사용하는 메서드
   */
  increaseLocation() {
    this.#location += 1;
  }

  /**
   * 시도 횟수 증가할 때 사용하는 메서드
   */
  increaseTryCount() {
    this.#tryCount += 1;
  }

  /**
   * 위치 초기화 시 사용하는 메서드
   */
  resetLocation() {
    this.#location = BridgeGameStatus.#INITIAL_LOCATION;
  }
}

module.exports = BridgeGameStatus;
