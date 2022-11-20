/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveHistory = [];
  #totalTryCount = 1;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moving 이동할 칸
   */
  move(moving) {
    this.#moveHistory.push({
      block: moving,
      isCorrect: moving === this.#bridge[this.#moveHistory.length],
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  /**
   * 사용자가 이동에 실패하는 경우 게임의 재시작 여부를 판단하는 메서드
   * @returns {boolean} 게임이 재시작되어야 하면 true, 아니면 false를 반환한다.
   */
  isRetry() {
    const { isCorrect } = this.#moveHistory[this.#moveHistory.length - 1];

    return isCorrect === false;
  }

  /**
   * 게임의 성공 여부를 판단하는 메서드
   * @returns {boolean} 게임이 성공하면 true, 실패하면 false를 반환한다.
   */
  isClear() {
    const { isCorrect } = this.#moveHistory[this.#moveHistory.length - 1];

    return (
      this.#bridge.length === this.#moveHistory.length && isCorrect === true
    );
  }

  /**
   * 현재까지 이동한 블록들과 이동 성공 여부에 대한 정보를 반환하는 메서드
   * @returns {Object[]} 현재까지 이동한 블록들과 이동 성공 여부가 담긴 배열
   */
  getMoveHistory() {
    return this.#moveHistory;
  }

  /**
   * 게임의 총 시도 횟수를 반환하는 메서드
   * @returns {number} 게임의 총 시도 횟수
   */
  getTotalTryCount() {
    return this.#totalTryCount;
  }
}

module.exports = BridgeGame;
