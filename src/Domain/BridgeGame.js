const Validator = require('../Validator');
const ERROR = require('../constants/error');

class BridgeGame {
  #gameStats = new Map();

  constructor(bridgeSize) {
    this.#gameStats.set('attempt', 0).set('moveCount', 0).set('bridgeSize', bridgeSize);
  }

  try() {
    this.#gameStats.set('attempt', this.#gameStats.get('attempt') + 1);
  }

  move(moving) {
    this.validateMoving(moving);
    this.#gameStats.set('moveCount', this.#gameStats.get('moveCount') + 1);
  }

  retry() {
    this.#gameStats.set('moveCount', 0);
    this.try();
  }

  getAttempt() {
    return this.#gameStats.get('attempt');
  }

  getMoveCount() {
    return this.#gameStats.get('moveCount');
  }

  isGameSuccess() {
    return this.#gameStats.get('bridgeSize') === this.#gameStats.get('moveCount');
  }

  validateMoving(moving) {
    if (!Validator.isMoving(moving)) throw new Error(ERROR.MOVING);
  }
}

module.exports = BridgeGame;
