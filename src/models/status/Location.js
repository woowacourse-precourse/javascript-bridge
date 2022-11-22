/**
 * 다리 건너기 게임 위치 상태 클래스
 * @class
 */
class Location {
  static #INITIAL_STATE = -1;

  #state = Location.#INITIAL_STATE;

  /**
   * 상태 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getState() {
    return this.#state;
  }

  /**
   * 위치 증가할 때 사용하는 메서드
   */
  increment() {
    this.#state += 1;
  }

  /**
   * 마지막 위치인지 확인할 때 사용하는 메서드
   * @param {number} size 다리 사이즈
   * @return {boolean} 마지막 위치인지 여부
   */
  isLast(size) {
    return size - 1 === this.#state;
  }

  /**
   * 위치 초기화 시 사용하는 메서드
   */
  reset() {
    this.#state = Location.#INITIAL_STATE;
  }
}

module.exports = Location;
