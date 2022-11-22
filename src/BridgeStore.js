class BridgeStore {
  #bridge;

  #tryCount;

  #userInputResults = [];

  constructor(bridge, tryCount) {
    this.#bridge = bridge;
    this.#tryCount = tryCount;
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

  #resetUserInputResult() {
    this.#userInputResults = [];
  }

  getUserInputResultLength = () => this.#userInputResults.length;

  getUserInputResult = (idx) => this.#userInputResults[idx];

  isGameClear() {
    return this.isSameWithBridgeLength(this.getUserInputResultLength())
    && this.#userInputResults.every(({ result }) => result);
  }

  #updateTryCount() {
    this.#tryCount += 1;
  }

  retry() {
    this.#updateTryCount();
    this.#resetUserInputResult();
  }

  getGameResult() {
    return {
      isGameClear: this.isGameClear(),
      tryCount: this.#tryCount,
    };
  }
}

module.exports = BridgeStore;
