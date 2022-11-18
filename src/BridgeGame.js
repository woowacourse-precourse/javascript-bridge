const Bulider = require('./Builder.js');
const Player = require('./Player.js');

class BridgeGame {
  #bridge;
  #player;

  constructor() {
    this.#player = new Player();
  }

  build(size) {
    const builder = new Bulider();

    this.#bridge = builder.buildBridge(size);
  }

  move(movingDirection) {
    this.#player.addDirection(movingDirection);
  }

  retry() {}
}

module.exports = BridgeGame;
