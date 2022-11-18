class BridgeStore {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  get bridge() {
    return this.#bridge;
  }

  isSameWithBridgeLength(number) {
    return this.bridge.length === number;
  }

  isMovable(count, command) {
    return this.bridge[count] === command;
  }
}

module.exports = BridgeStore;
