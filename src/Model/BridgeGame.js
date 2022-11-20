const Validator = require('../Validator');
const BridgeStatistics = require('./BridgeGameStatistics');
const BridgeMap = require('./BridgeMap');

class BridgeGame {
  #bridgeMap = new BridgeMap();
  #statistics = new BridgeStatistics();
  #bridge;

  try() {
    this.#statistics.increaseAttempt();
  }

  move(moving, canMove) {
    this.#bridgeMap.addMoveMark(moving, canMove);
    this.#statistics.increaseMoveCount();
  }

  retry() {
    this.#bridgeMap.reset();
    this.#statistics.resetMoveCount();
    this.try();
  }

  getBridgeMap() {
    return this.#bridgeMap.getBridgeMap();
  }

  getAttempt() {
    return this.#statistics.getAttempt();
  }

  setBridgeGame(bridge) {
    this.#bridge = bridge;
    this.#statistics.setBridgeSize(bridge.length);
  }

  isGameSuccess() {
    return this.#statistics.isGameSuccess();
  }

  canMove(moving) {
    return this.#bridge[this.#statistics.getMoveCount()] === moving;
  }
}

module.exports = BridgeGame;
