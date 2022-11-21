class BridgeGame {
  #round;
  #count;
  #up;
  #down;

  constructor() {
    this.#round = 0;
    this.#count = 0;
    this.#up = [];
    this.#down = [];
  }

  move() {
    this.#round += 1;

    return this.#round;
  }

  makeMap(oneBridge, upOrDown) {
    let upAndDown = { U: ' ', D: ' ' };
    if (oneBridge === upOrDown) upAndDown[upOrDown] = 'O';
    else upAndDown[upOrDown] = 'X';

    this.#up.push(upAndDown['U']);
    this.#down.push(upAndDown['D']);

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
    this.#count += 1;

    return this.#count;
  }
}

module.exports = BridgeGame;
