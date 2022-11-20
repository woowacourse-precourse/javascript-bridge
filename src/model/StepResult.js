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
        stepResult.insert(' X ', '   ');
        break;
      case 'D':
        stepResult.insert('   ', ' X ');
        break;
    }
  }

  correctStepRecord(move) {
    switch (move) {
      case 'U':
        stepResult.insert(' O ', '   ');
        break;
      case 'D':
        stepResult.insert('   ', ' O ');
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
