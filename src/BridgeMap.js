const {
  DIRECTION,
  BRIDGE_PARTS,
  SIGN,
  BRIDGE,
} = require('./Constants/constant');

class BridgeMap {
  #upperBridge;

  #downerBridge;

  constructor() {
    this.#upperBridge = [BRIDGE_PARTS.entrance];
    this.#downerBridge = [BRIDGE_PARTS.entrance];
  }

  create(game) {
    const records = game.getRecords();
    records.forEach((direction, idx) => {
      const bridge = game.getBridge();
      this.checkDirection(direction, bridge[idx]);
      this.createPier();
    });
    this.closeBridge();
  }

  checkDirection(direction, nextDirection) {
    if (direction === DIRECTION.up) {
      this.markUpperBridge(direction, nextDirection);
    } else if (direction === DIRECTION.down) {
      this.markDownerBridge(direction, nextDirection);
    }
  }

  markUpperBridge(direction, nextDirection) {
    if (direction === nextDirection)
      this.#upperBridge = [...this.#upperBridge, BRIDGE.crossable];
    else this.#upperBridge = [...this.#upperBridge, BRIDGE.uncrossable];
    this.#downerBridge = [...this.#downerBridge, SIGN.empty_space];
  }

  markDownerBridge(direction, nextDirection) {
    if (direction === nextDirection)
      this.#downerBridge = [...this.#downerBridge, BRIDGE.crossable];
    else this.#downerBridge = [...this.#downerBridge, BRIDGE.uncrossable];
    this.#upperBridge = [...this.#upperBridge, SIGN.empty_space];
  }

  createPier() {
    this.#upperBridge = [...this.#upperBridge, BRIDGE_PARTS.pier];
    this.#downerBridge = [...this.#downerBridge, BRIDGE_PARTS.pier];
  }

  closeBridge() {
    this.#upperBridge = [...this.#upperBridge.slice(0, -1), BRIDGE_PARTS.exit];
    this.#downerBridge = [
      ...this.#downerBridge.slice(0, -1),
      BRIDGE_PARTS.exit,
    ];
  }

  getUpperBridge() {
    return this.#upperBridge.join(' ');
  }

  getDownerBridge() {
    return this.#downerBridge.join(' ');
  }
}

module.exports = BridgeMap;
