/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #result;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#result = [];
  }

  getBridge() {
    this.#bridge;
  }

  move(moving) {
    const nextBridge = this.#bridge[this.#result.length];
    this.#result.push(moving === nextBridge);

    return this.#result;
  }

  retry() {
    this.#result = [];
  }
}

module.exports = BridgeGame;
