class BridgeStore {
  #bridge;

  #userInputResults = [];

  constructor(bridge) {
    console.log(bridge);
    this.#bridge = bridge;
  }

  isSameWithBridgeLength(number) {
    return this.#bridge.length === number;
  }

  isMovable(count, command) {
    return this.#bridge[count] === command;
  }

  addUserInputResult(result) {
    this.#userInputResults = [...this.#userInputResults, result];
  }

  getUserInputResult = (idx) => this.#userInputResults[idx];
}

module.exports = BridgeStore;
