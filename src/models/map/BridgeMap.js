/**
 * 다리 배열 타입 정의
 * @typedef {Array.<boolean | null>} BridgeProcess
 */

/**
 * 다리 지도 클래스
 * @class
 */
class BridgeMap {
  /**
   * 다리 지도 상태 타입
   * @type {BridgeProcess}
   */
  static #INITIAL_STATE = [];

  #state = BridgeMap.#INITIAL_STATE;

  /**
   * 다리 지도 가져올 때 사용하는 메서드
   * @returns {BridgeProcess}
   */
  getState() {
    return this.#state;
  }

  /**
   * 다리 건너기 여부 추가할 때 사용하는 메서드
   * @param {boolean} isCrossed
   */
  addIsCrossed(isCrossed) {
    this.#state = [...this.#state, isCrossed];
  }

  /**
   * 선택되지 않았을 때 추가하기 위해 사용하는 메서드
   */
  addNotSelected() {
    this.#state = [...this.#state, null];
  }

  /**
   * 지도 초기화할 때 사용하는 메서드
   */
  reset() {
    this.#state = BridgeMap.#INITIAL_STATE;
  }
}

module.exports = BridgeMap;
