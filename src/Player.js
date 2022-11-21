class Player {
  #bridgePath;
  #out;

  constructor() {
    this.#bridgePath = { upperBridge: [], lowerBridge: [] };
    this.#out = false;
  }

  move(direction) {
    if (this.#out) return;
    this.#bridgePath.upperBridge.push(direction === "U" ? "O" : " ");
    this.#bridgePath.lowerBridge.push(direction === "D" ? "O" : " ");
  }

  out(direction) {
    this.#out = true;
    this.#bridgePath.upperBridge.push(direction === "U" ? "X" : " ");
    this.#bridgePath.lowerBridge.push(direction === "D" ? "X" : " ");
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
