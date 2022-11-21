const Bridge = require('./Bridge');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  /**
   * @param {Bridge} bridge
   */
  constructor(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {}
}

module.exports = BridgeGame;
