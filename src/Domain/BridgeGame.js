const DomainValidator = require('../validator/DomainValidator');

class BridgeGame {
  #gameStats = new Map();

  constructor() {
    this.#gameStats.set('attempt', 0).set('moveCount', 0);
  }

  try() {
    this.#gameStats.set('attempt', this.#gameStats.get('attempt') + 1);
  }

  move(moving) {
    DomainValidator.validateMoving(moving);
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

  isGameSuccess(bridgeSize) {
    return bridgeSize === this.#gameStats.get('moveCount');
  }
}

module.exports = BridgeGame;
