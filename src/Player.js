class Player {
  #bridgePath;
  #out;

  constructor() {
    this.#bridgePath = [];
    this.#out = "";
  }

  move(direction) {
    if (!this.#out) {
      this.#bridgePath.push(direction);
    }
  }

  out(direction) {
    this.#out = direction;
  }

  getCurrentPosition() {
    return this.#bridgePath.length;
  }

  #getBridgeArray() {
    const upperBridge = this.#bridgePath.map((direction) => (direction === "U" ? "O" : " "));
    const lowerBridge = this.#bridgePath.map((direction) => (direction === "D" ? "O" : " "));
    return [upperBridge, lowerBridge];
  }

  #addOutMark(upperBridge, lowerBridge) {
    if (this.#out === "U") {
      upperBridge.push("X");
      lowerBridge.push(" ");
    }
    if (this.#out === "D") {
      upperBridge.push(" ");
      lowerBridge.push("X");
    }
  }

  #toString(upperBridge, lowerBridge) {
    const upperBridgeString = `[ ${upperBridge.join(" | ")} ]`;
    const lowerBridgeString = `[ ${lowerBridge.join(" | ")} ]`;

    return [upperBridgeString, lowerBridgeString];
  }

  getMap() {
    const [upperBridge, lowerBridge] = this.#getBridgeArray();
    if (this.#out) {
      this.#addOutMark(upperBridge, lowerBridge);
    }
    return this.#toString(upperBridge, lowerBridge);
  }
}

module.exports = Player;
