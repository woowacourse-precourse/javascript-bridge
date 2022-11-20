class Bridge {
  #bridge;

  constructor(bridge) {
    this.#validate(bridge);
    this.#bridge = bridge;
  }

  #validate(bridge) {
    if (bridge.length < 3 || bridge.length > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
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
