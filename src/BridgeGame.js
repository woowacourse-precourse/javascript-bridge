const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { MOVE } = require('./constants/Command');

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
    const preUpper = this.getSingleResultStringArray(MOVE.UP, proceeded);
    const preLower = this.getSingleResultStringArray(MOVE.DOWN, proceeded);
    const { upper, lower } = this.markFailedPoint(preUpper, preLower);

    return { upper, lower };
  }

  getSingleResultStringArray(direction, originalArray) {
    if (direction === MOVE.UP) {
      return originalArray.map((space) =>
        space === MOVE.UP ? MOVE.CORRECT : MOVE.NO_VISITED
      );
    }
    return originalArray.map((space) =>
      space === MOVE.DOWN ? MOVE.CORRECT : MOVE.NO_VISITED
    );
  }

  markFailedPoint(preUpper, preLower) {
    const upper = preUpper;
    const lower = preLower;
    if (this.#bridge[this.#position] === MOVE.UP) {
      lower[this.#position] = MOVE.INCORRECT;
    }
    if (this.#bridge[this.#position] === MOVE.DOWN) {
      upper[this.#position] = MOVE.INCORRECT;
    }

    return { upper, lower };
  }
}

module.exports = BridgeGame;
