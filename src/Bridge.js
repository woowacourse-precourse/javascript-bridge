class Bridge {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  isMovable(position, direction) {
    return this.#bridge[position] === direction;
  }

  isLastStep(position) {
    return this.#bridge.length === position;
  }

  getPassedMap(position) {
    const upperBridge = this.#bridge.slice(0, position).map((direction) => (direction === "U" ? "O" : " "));
    const lowerBridge = this.#bridge.slice(0, position).map((direction) => (direction === "D" ? "O" : " "));
    return [upperBridge, lowerBridge];
  }

  getFailMap(position, direction) {
    const [upperBridge, lowerBridge] = this.getPassedMap(position);
    if (direction === "U") {
      upperBridge.push("X");
      lowerBridge.push(" ");
    }
    if (direction === "D") {
      upperBridge.push(" ");
      lowerBridge.push("X");
    }
    return [upperBridge, lowerBridge];
  }
}

module.exports = Bridge;
