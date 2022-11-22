const { DIRECTION, BRIDGE_PARTS, BRIDGE } = require('../Constants/constant');

class BridgeMap {
  #upperBridge = [BRIDGE_PARTS.entrance];

  #downerBridge = [BRIDGE_PARTS.entrance];

  create(game) {
    const records = game.getRecords();
    const bridge = game.getBridge();
    records.forEach((direction, idx) => {
      this.#checkDirection(direction, bridge[idx]);
      this.#createPier();
    });
    this.#closeBridge();
  }

  #checkDirection(direction, nextDirection) {
    if (direction === DIRECTION.up) {
      this.#markUpperBridge(direction, nextDirection);
    } else if (direction === DIRECTION.down) {
      this.#markDownerBridge(direction, nextDirection);
    }
  }

  #markUpperBridge(direction, nextDirection) {
    if (direction === nextDirection) {
      this.#upperBridge = [...this.#upperBridge, BRIDGE.crossable];
    } else {
      this.#upperBridge = [...this.#upperBridge, BRIDGE.uncrossable];
    }
    this.#downerBridge = [...this.#downerBridge, BRIDGE.empty_space];
  }

  #markDownerBridge(direction, nextDirection) {
    if (direction === nextDirection) {
      this.#downerBridge = [...this.#downerBridge, BRIDGE.crossable];
    } else {
      this.#downerBridge = [...this.#downerBridge, BRIDGE.uncrossable];
    }
    this.#upperBridge = [...this.#upperBridge, BRIDGE.empty_space];
  }

  #createPier() {
    this.#upperBridge = [...this.#upperBridge, BRIDGE_PARTS.pier];
    this.#downerBridge = [...this.#downerBridge, BRIDGE_PARTS.pier];
  }

  #closeBridge() {
    this.#upperBridge = [...this.#upperBridge.slice(0, -1), BRIDGE_PARTS.exit];
    this.#downerBridge = [
      ...this.#downerBridge.slice(0, -1),
      BRIDGE_PARTS.exit,
    ];
  }

  getBridge() {
    const upperBridge = this.#upperBridge.join(' ');
    const downerBridge = this.#downerBridge.join(' ');
    return { upperBridge, downerBridge };
  }
}

module.exports = BridgeMap;
