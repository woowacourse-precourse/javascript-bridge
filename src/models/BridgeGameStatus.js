/**
 * 게임 상태 타입 정의
 * @typedef {Object} BridgeGameStatusState
 * @property {number} location
 * @property {number} tryCount
 */

/**
 * 다리 건너기 게임 상태 클래스
 * @class
 */
class BridgeGameStatus {
  static initLocation = -1;

  static initTryCount = 0;

  /**
   * 게임 상태 타입
   * @type {BridgeGameStatusState}
   */
  #state = {
    location: BridgeGameStatus.initLocation,
    tryCount: BridgeGameStatus.initTryCount,
  };

  /**
   * 위치 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getLocation() {
    return this.#state.location;
  }

  /**
   * 시도 횟수 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getTryCount() {
    return this.#state.tryCount;
  }

  /**
   * 위치 증가할 때 사용하는 메서드
   */
  increaseLocation() {
    this.#state.location += 1;
  }

  /**
   * 시도 횟수 증가할 때 사용하는 메서드
   */
  increaseTryCount() {
    this.#state.tryCount += 1;
  }

  /**
   * 위치 초기화 시 사용하는 메서드
   */
  resetLocation() {
    this.#state.location = BridgeGameStatus.initLocation;
  }
}

module.exports = BridgeGameStatus;
