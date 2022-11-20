const { BRIDGE_PARTS, SIGN } = require('./Constants/contant');
const DIRECTION = require('./Constants/direction');

class BridgePartsController {
  #upperBridge;

  #downerBridge;

  constructor() {
    this.#upperBridge = [BRIDGE_PARTS.entrance];
    this.#downerBridge = [BRIDGE_PARTS.entrance];
  }

  createMap(game) {
    const records = game.getRecords();
    records.forEach((direction, idx) => {
      const bridge = game.getBridge();
      this.checkDirection(game, direction, bridge[idx]);
      this.createPier();
    });
  }

  checkDirection(game, direction, nextDirection) {
    if (direction === DIRECTION.up) {
      this.markUpperBridge(direction, nextDirection);
    } else if (direction === DIRECTION.down) {
      this.markDownerBridge(direction, nextDirection);
    }
  }

  markUpperBridge(direction, nextDirection) {
    if (direction === nextDirection)
      this.#upperBridge = [...this.#upperBridge, SIGN.O];
    else this.#upperBridge = [...this.#upperBridge, SIGN.X];
    this.#downerBridge = [...this.#downerBridge, SIGN.empty_space];
  }

  markDownerBridge(direction, nextDirection) {
    if (direction === nextDirection)
      this.#downerBridge = [...this.#downerBridge, SIGN.O];
    else this.#downerBridge = [...this.#downerBridge, SIGN.X];
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

module.exports = BridgePartsController;
