const Validator = require('./Validator');

class BridgeGame {
  #bridge;
  #movingBridge;
  #attempt;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#movingBridge = [];
    this.#attempt = 1;
  }

  move(moving) {
    Validator.validateMoving(moving);
    this.#movingBridge.push(moving);
  }

  retry() {
    this.#movingBridge = [];
    this.#attempt += 1;
  }

  isSuccessMove() {
    const index = this.#movingBridge.length - 1;
    return this.#movingBridge[index] === this.#bridge[index];
  }

  isSameBridgeSize() {
    return this.#bridge.length === this.#movingBridge.length;
  }

  getAttempt() {
    return this.#attempt;
  }
}

module.exports = BridgeGame;
