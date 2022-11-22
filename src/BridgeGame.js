class BridgeGame {
  #round;
  #totalGame;
  #up;
  #down;

  constructor() {
    this.#round = 0;
    this.#totalGame = 0;
    this.#up = [];
    this.#down = [];
  }

  move() {
    this.#round++;

    return this.#round;
  }

  retry() {
    this.#round = 0;
    this.#up = [];
    this.#down = [];

    return this.#round;
  }

  countGame() {
    this.#totalGame++;

    return this.#totalGame;
  }

  makeBridge(Bridge, upDown) {
    let UD = { U: ' ', D: ' ' };
    Bridge === upDown ? (UD[upDown] = 'O') : (UD[upDown] = 'X');

    this.#up.push(UD['U']);
    this.#down.push(UD['D']);

    return [this.#up, this.#down, Bridge === upDown];
  }

  getBridge() {
    return [this.#up, this.#down];
  }
}

module.exports = BridgeGame;
