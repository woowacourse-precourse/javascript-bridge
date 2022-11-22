const Location = require('./Location');
const TryCount = require('./TryCount');

/**
 * 다리 건너기 게임 상태 클래스
 * @class
 */
class BridgeGameStatus {
  #location = new Location();

  #tryCount = new TryCount();

  /**
   * 위치 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getLocation() {
    return this.#location.getState();
  }

  /**
   * 시도 횟수 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getTryCount() {
    return this.#tryCount.getState();
  }

  /**
   * 위치 증가할 때 사용하는 메서드
   */
  increaseLocation() {
    this.#location.increment();
  }

  /**
   * 시도 횟수 증가할 때 사용하는 메서드
   */
  increaseTryCount() {
    this.#tryCount.increment();
  }

  /**
   * 게임 승리 여부 확인하는 메서드
   * @param {number} size 다리 사이즈
   * @param {boolean} isCrossed 해당 칸 건넜는지 성공 여부
   * @return {boolean} 게임 승리 여부
   */
  isWin(size, isCrossed) {
    return this.#location.isLast(size) && isCrossed;
  }

  /**
   * 위치 초기화 시 사용하는 메서드
   */
  resetLocation() {
    this.#location.reset();
  }
}

module.exports = BridgeGameStatus;
