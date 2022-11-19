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

  isFinished() {
    return this.#position >= this.#bridge.length;
  }

  getAttempts() {
    return this.#attempts;
  }

  getResultArray() {
    const proceeded = this.#bridge.slice(0, this.#position);
    const upper = this.getSingleResultArray(MOVE.UP, proceeded);
    const lower = this.getSingleResultArray(MOVE.DOWN, proceeded);

    if (this.isFailed()) {
      return this.getFailedMarkedResultArray({ upper, lower });
    }
    return { upper, lower };
  }

  getSingleResultArray(direction, originalArray) {
    if (direction === MOVE.UP) {
      return originalArray.map((space) =>
        space === MOVE.UP ? MOVE.CORRECT : MOVE.NO_VISITED
      );
    }
    return originalArray.map((space) =>
      space === MOVE.DOWN ? MOVE.CORRECT : MOVE.NO_VISITED
    );
  }

  getFailedMarkedResultArray(resultArrays) {
    const { upper, lower } = resultArrays;
    if (this.#bridge[this.#position] === MOVE.UP) {
      lower[this.#position] = MOVE.INCORRECT;
      upper[this.#position] = MOVE.NO_VISITED;
    }
    if (this.#bridge[this.#position] === MOVE.DOWN) {
      upper[this.#position] = MOVE.INCORRECT;
      lower[this.#position] = MOVE.NO_VISITED;
    }
    return { upper, lower };
  }
}

module.exports = BridgeGame;
