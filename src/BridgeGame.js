const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #position;
  #attempts;
  #failed;

  constructor(length) {
    this.#bridge = makeBridge(length, generate);
    this.#position = 0;
    this.#attempts = 1;
    this.#failed = false;
  }

  move(direction) {
    if (this.#bridge[this.#position] === direction) {
      this.#position += 1;
      return this.#position < this.#bridge.length;
    }
    this.#failed = true;
    return false;
  }

  retry() {
    this.#position = 0;
    this.#attempts += 1;
    this.#failed = false;
  }

  isFailed() {
    return this.#failed;
  }

  getAttempts() {
    return this.#attempts;
  }
}

module.exports = BridgeGame;
