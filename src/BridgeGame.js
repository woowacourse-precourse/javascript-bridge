const BridgeGameHandler = require('./BridgeGameHandler');
const Player = require('./Player');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #player;
  #attempts;

  constructor() {
    this.#bridge;
    this.#player = new Player();
    this.#attempts = 1;
  }

  setBridge(size) {
    this.#bridge = makeBridge(size, generate);
  }

  isMovable(direction) {
    return direction === this.#bridge[this.#player.getCurrentLocation()];
  }

  move() {}

  retry() {}
}

module.exports = BridgeGame;
