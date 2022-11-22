const Constants = require('./Constants');

class BridgeGame {
  #round;
  #totalTry;
  #up;
  #down;

  constructor() {
    this.#round = 0;
    this.#totalTry = 0;
    this.#up = [];
    this.#down = [];
  }

  move() {
    this.#round += 1;

    return this.#round;
  }

  makeMap(oneBridge, upOrDown) {
    const map = { U: ' ', D: ' ' };
    if (oneBridge === upOrDown) map[upOrDown] = Constants.CORRECT;
    else map[upOrDown] = Constants.UN_CORRECT;

    this.#up.push(map['U']);
    this.#down.push(map['D']);

    return [this.#up, this.#down, oneBridge === upOrDown];
  }

  getMap() {
    return [this.#up, this.#down];
  }

  retry() {
    this.#round = 0;
    this.#up = [];
    this.#down = [];

    return this.#round;
  }

  countTry() {
    this.#totalTry += 1;

    return this.#totalTry;
  }
}

module.exports = BridgeGame;
