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

  retry() {
    this.#upperBridge = '';
    this.#lowerBridge = '';
  }

  get upperBridge() {
    return this.#upperBridge;
  }

  get lowerBridge() {
    return this.#lowerBridge;
  }
}

module.exports = StepResult;
