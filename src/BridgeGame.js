/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveCount = 0;
  #playerInput;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  haveBridge() {
    if (this.#playerInput === this.#bridge[this.#moveCount - 1]) {
      return true;
    }
  }
}

module.exports = BridgeGame;
