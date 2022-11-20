class StepResult {
  #upperBridge;

  #lowerBridge;

  constructor() {
    this.#upperBridge = '';
    this.#lowerBridge = '';
  }

  retry() {
    this.#upperBridge = '';
    this.#lowerBridge = '';
  }

  get upperBridge() {
    return this.#upperBridge;
  }

  set upperBridge(value) {
    this.#upperBridge = value;
  }

  get lowerBridge() {
    return this.#lowerBridge;
  }

  set lowerBridge(value) {
    this.#lowerBridge = value;
  }
}

module.exports = StepResult;
