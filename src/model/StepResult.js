class StepResult {
  #upperBridge;

  #lowerBridge;

  constructor() {
    this.#upperBridge = '';
    this.#lowerBridge = '';
  }

  wrongStepRecord(move) {
    switch (move) {
      case 'U':
        this.insert(' X ', '   ');
        break;
      case 'D':
        this.insert('   ', ' X ');
        break;
    }
  }

  correctStepRecord(move) {
    switch (move) {
      case 'U':
        this.insert(' O ', '   ');
        break;
      case 'D':
        this.insert('   ', ' O ');
        break;
    }
  }

  insert(upperBridgeResult, lowerBridgeResult) {
    this.#upperBridge += upperBridgeResult;
    this.#lowerBridge += lowerBridgeResult;
  }

  reset() {
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
