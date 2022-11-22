/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
  #order;
  #bridge;
  constructor() {
    this.#order = -1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    this.#order += 1;
    if (input === this.#bridge[this.#order]) {
      if (this.#order === this.#bridge.length - 1) return "END";
      return "SUCCESS";
    }
    return "FAIL";
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getOrder() {
    return this.#order;
  }

  getBridge() {
    return [...this.#bridge];
  }
}

module.exports = BridgeGame;