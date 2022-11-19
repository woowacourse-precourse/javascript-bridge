class BridgeModel {
  #bridge;

  constructor() {
    this.#bridge = [];
  }

  // 다리를 반환한다.
  getBridge() {
    return this.#bridge;
  }

  /**
   * 다리의 상태(모습) 을 변경한다.
   * @param newBridge (새로운 다리)
   */
  setBridge(newBridge) {
    this.#bridge = newBridge;
  }
}

module.exports = BridgeModel;
