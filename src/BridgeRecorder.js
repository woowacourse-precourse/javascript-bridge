const { BRIDGE } = require('./constant/constant');

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
    this.#upBridge.push(BRIDGE.FIRST_BLOCK(state));
    this.#downBridge.push(BRIDGE.NOT_CHOOSE_FIRST_BLOCK);
    return [this.#upBridge, this.#downBridge];
  }

  addFirstDownBlock(state) {
    this.#upBridge.push(BRIDGE.NOT_CHOOSE_FIRST_BLOCK);
    this.#downBridge.push(BRIDGE.FIRST_BLOCK(state));
    return [this.#upBridge, this.#downBridge];
  }

  addUpBlock(state) {
    this.#upBridge.push(BRIDGE.AFTER_FIRST_BLOCK(state));
    this.#downBridge.push(BRIDGE.NOT_CHOOSE_AFTER_FIRST_BLOCK);
    return [this.#upBridge, this.#downBridge];
  }

  addDownBlock(state) {
    this.#upBridge.push(BRIDGE.NOT_CHOOSE_AFTER_FIRST_BLOCK);
    this.#downBridge.push(BRIDGE.AFTER_FIRST_BLOCK(state));
    return [this.#upBridge, this.#downBridge];
  }

  getResult() {
    return [this.#upBridge, this.#downBridge];
  }
}

module.exports = BridgeRecorder;
