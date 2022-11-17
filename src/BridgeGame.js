/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #bridge;

  #attempt;

  constructor() {
    this.#attempt = 0;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * return : {U: [], D:[]} 이런 형태로
   */

  initializeResult() {
    if (this.#attempt == 0) {
      return [];
    }
    return [...this.#bridge].slice(0, this.#attempt);
  }

  move(moving) {
    const result = this.initializeResult();
    if (this.#bridge[this.#attempt] == moving) {
      result.push(moving);
      this.#attempt += 1;
      return result;
    }
    result.push(0);
    return result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
