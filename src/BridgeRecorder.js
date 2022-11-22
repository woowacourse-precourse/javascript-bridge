class BridgeRecorder {
  #upBridge;
  #downBridge;

  constructor(uppers, lowers) {
    this.#upBridge = uppers;
    this.#downBridge = lowers;
  }

  init() {
    this.#upBridge = [];
    this.#downBridge = [];
  }

  addFirstUpBlock(state) {
    this.#upBridge.push(` ${state} `);
    this.#downBridge.push('   ');
    return [this.#upBridge, this.#downBridge];
  }

  addFirstDownBlock(state) {
    this.#upBridge.push('   ');
    this.#downBridge.push(` ${state} `);
    return [this.#upBridge, this.#downBridge];
  }

  addUpBlock(state) {
    this.#upBridge.push(`| ${state} `);
    this.#downBridge.push('|   ');
    return [this.#upBridge, this.#downBridge];
  }

  addDownBlock(state) {
    this.#upBridge.push('|   ');
    this.#downBridge.push(`| ${state} `);
    return [this.#upBridge, this.#downBridge];
  }

  getResult() {
    return [this.#upBridge, this.#downBridge];
  }
}

module.exports = BridgeRecorder;
