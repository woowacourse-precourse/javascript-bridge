const Bulider = require('./Builder.js');

class BridgeGame {
  #bridge;

  buildBridge(size) {
    const builder = new Bulider();

    builder.buildBridge(size);
  }

  move() {}

  retry() {}
}

module.exports = BridgeGame;
