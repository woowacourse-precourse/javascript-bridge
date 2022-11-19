/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #user;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#user = [];
  }

  move(move) {
    const current = this.#user.length;
    if (this.#bridge[current] === move) {
      this.#user.push(move);
      return this.#user.length === this.#bridge.length;
    }
  }

  retry() {}
}

module.exports = BridgeGame;
