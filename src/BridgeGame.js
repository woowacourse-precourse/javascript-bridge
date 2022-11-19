const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { MOVE_UP, NO_VISITED, MOVE_DOWN } = require('./constants/Command');

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

  getResultStringArray() {
    const proceeded = this.#bridge.slice(0, this.#position);
    const result = proceeded.map((space) =>
      space === MOVE_UP ? MOVE_UP : MOVE_DOWN
    );
    if (this.isFailed()) {
      result[this.#position] =
        this.#bridge[this.#position] === MOVE_UP ? MOVE_DOWN : MOVE_UP;
    }

    return result;
  }
}

module.exports = BridgeGame;
