/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge = [];

  saveBridge(bridge) {
    this.#bridge = bridge;
  }
}

module.exports = BridgeGame;
