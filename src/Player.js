class Player {
  #bridgePath;

  constructor() {
    this.#bridgePath = { upperBridge: [], lowerBridge: [] };
  }

  move(direction) {
    if (this.isFallen()) return;
    this.#bridgePath.upperBridge.push(direction === "U" ? "O" : " ");
    this.#bridgePath.lowerBridge.push(direction === "D" ? "O" : " ");
  }

  fall(direction) {
    if (this.isFallen()) return;
    this.#bridgePath.upperBridge.push(direction === "U" ? "X" : " ");
    this.#bridgePath.lowerBridge.push(direction === "D" ? "X" : " ");
  }

  isFallen() {
    if (this.#bridgePath.upperBridge.slice(-1)[0] === "X") return true;
    if (this.#bridgePath.lowerBridge.slice(-1)[0] === "X") return true;
    return false;
  }

  getCurrentPosition() {
    return this.#bridgePath.upperBridge.length;
  }

  #toString({ upperBridge, lowerBridge }) {
    const upperBridgeString = `[ ${upperBridge.join(" | ")} ]`;
    const lowerBridgeString = `[ ${lowerBridge.join(" | ")} ]`;

    return [upperBridgeString, lowerBridgeString];
  }

  getMap() {
    return this.#toString(this.#bridgePath);
  }
}

module.exports = Player;
