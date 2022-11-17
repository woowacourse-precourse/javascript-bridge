const Bulider = require('./Builder.js');

class BridgeGame {
  #bridge;

  build(size) {
    const builder = new Bulider();

    this.#bridge = builder.buildBridge(size);
  }

  move() {}

  retry() {}
}

module.exports = BridgeGame;
