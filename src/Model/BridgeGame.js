const Validator = require('../Validator');
const BridgeStatistics = require('./BridgeGameStatistics');
const BridgeMap = require('./BridgeMap');

class BridgeGame {
  #bridge;
  #bridgeMap;
  #statistics;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#bridgeMap = new BridgeMap();
    this.#statistics = new BridgeStatistics(bridge.length);
  }

  start() {
    this.#statistics.increaseAttempt();
  }

  move(moving) {
    Validator.validateMoving(moving);
    this.#bridgeMap.addMoveMark(moving, this.canMove(moving));
    this.#statistics.increaseMoveCount();
  }

  retry() {
    this.#bridgeMap.reset();
    this.#statistics.resetMoveCount();
  }

  getBridgeMap() {
    return this.#bridgeMap.getBridgeMap();
  }

  getAttempt() {
    return this.#statistics.getAttempt();
  }

  isGameWin() {
    return this.#statistics.isGameWin();
  }

  canMove(moving) {
    return this.#bridge[this.#statistics.getMoveCount()] === moving;
  }
}

module.exports = BridgeGame;
