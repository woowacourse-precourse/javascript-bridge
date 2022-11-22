/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class Bridge {
  #bridge;
  #crossBridge;

  constructor() {
    this.#crossBridge = [[], []];
  }
  setBridge(bridge) {
    this.#bridge = bridge;
  }
  getBridge() {
    return this.#bridge;
  }

  setCrossBridge(crossBridge) {
    this.#crossBridge = crossBridge;
  }
  getCrossBridge() {
    return this.#crossBridge;
  }
  getCrossBridgeSize() {
    return this.#crossBridge[0].length;
  }
}

module.exports = Bridge;
