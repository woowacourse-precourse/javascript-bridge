const { DIRECTION } = require("../utils/constants");

class Player {
  #bridgePath;

  constructor() {
    this.#bridgePath = { upperBridge: [], lowerBridge: [] };
  }

  move(direction) {
    if (this.isFallen()) return;
    this.#bridgePath.upperBridge.push(direction === DIRECTION.TO_UPPER ? "O" : " ");
    this.#bridgePath.lowerBridge.push(direction === DIRECTION.TO_LOWER ? "O" : " ");
  }

  fall(direction) {
    if (this.isFallen()) return;
    this.#bridgePath.upperBridge.push(direction === DIRECTION.TO_UPPER ? "X" : " ");
    this.#bridgePath.lowerBridge.push(direction === DIRECTION.TO_LOWER ? "X" : " ");
  }

  isFallen() {
    if (this.#bridgePath.upperBridge.slice(-1)[0] === "X") return true;
    if (this.#bridgePath.lowerBridge.slice(-1)[0] === "X") return true;
    return false;
  }

  getCurrentPosition() {
    if (this.isFallen()) return -1;
    return this.#bridgePath.upperBridge.length;
  }

  #toString({ upperBridge, lowerBridge }) {
    const upperBridgeString = `[ ${upperBridge.join(" | ")} ]`;
    const lowerBridgeString = `[ ${lowerBridge.join(" | ")} ]`;

    return { upperBridgeMap: upperBridgeString, lowerBridgeMap: lowerBridgeString };
  }

  getMap() {
    return this.#toString(this.#bridgePath);
  }
}

module.exports = Player;
