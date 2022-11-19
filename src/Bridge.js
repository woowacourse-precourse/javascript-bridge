class Bridge {
  #bridge;

  constructor(bridge) {
    this.#validate(bridge);
    this.#bridge = bridge;
  }

  #validate(bridge) {
    if (bridge.length < 3 || bridge.length > 20) {
      throw new Error("[ERROR] 다리의 길이는 3 이상 20 이하의 숫자만 입력 가능합니다.");
    }
  }

  isMovable(path, direction) {
    return this.#bridge[path.length] === direction;
  }

  isLastStep(position) {
    return this.#bridge.length === position + 1;
  }

  getPassedMap(position) {
    const upperBridge = this.#bridge.slice(0, position + 1).map((direction) => (direction === "U" ? "O" : " "));
    const lowerBridge = this.#bridge.slice(0, position + 1).map((direction) => (direction === "D" ? "O" : " "));
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
