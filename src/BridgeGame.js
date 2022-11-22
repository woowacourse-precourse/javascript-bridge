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
    let map = { U: ' ', D: ' ' };
    oneBridge === upOrDown ? (map[upOrDown] = 'O') : (map[upOrDown] = 'X');
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
