const Bridge = require("./Bridge");

class BridgeGame {
  #bridge;
  #result;
  #attempts;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  move() {
    this.#bridge.move();
  }

  retry() {
    this.#result = [];
    this.#attempts += 1;
    this.#bridge.initializeCurrentDirection();
  }

  isAnswer(direction) {
    if (this.#bridge.isCurrentDirection(direction)) return true;
    return false;
  }

  isGameEnd() {
    if (this.#bridge.isBridgeEnd()) return true;
    return false;
  }
}

module.exports = BridgeGame;
