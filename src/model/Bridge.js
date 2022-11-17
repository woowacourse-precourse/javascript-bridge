class Bridge {
  #originalBridge;

  constructor() {}

  getOriginalBridge() {
    return this.#originalBridge;
  }

  setOriginalBridge(bridge) {
    this.#originalBridge = bridge;
  }
}

module.exports = Bridge;
