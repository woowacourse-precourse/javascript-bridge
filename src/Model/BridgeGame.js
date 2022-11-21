const BridgeMap = require('./BridgeMap');
const Bridge = require('./Bridge');

class BridgeGame {
  #bridgeMap = new BridgeMap();
  #bridge = new Bridge();
  #gameStat = new Map();

  constructor() {
    this.gameInit();
  }

  gameInit() {
    this.#gameStat.set('attempt', 0).set('moveCount', 0).set('isAlive', null);
  }

  try() {
    this.#gameStat.set('isAlive', true).set('attempt', this.#gameStat.get('attempt') + 1);
  }

  move(moving) {
    const canIMove = this.#bridge.canMove(this.#gameStat.get('moveCount'), moving);

    this.#bridgeMap.addMoveMark(moving, canIMove);
    if (canIMove) return this.#gameStat.set('moveCount', this.#gameStat.get('moveCount') + 1);

    return this.gameOver();
  }

  gameOver() {
    this.#gameStat.set('isAlive', false);
  }

  retry() {
    this.#gameStat.set('moveCount', 0);
    this.#bridgeMap.reset();
    this.try();
  }

  getAttempt() {
    return this.#gameStat.get('attempt');
  }

  getBridgeMap() {
    return this.#bridgeMap.getBridgeMap();
  }

  setBridge(bridge) {
    this.#bridge.setBridge(bridge);
  }

  isGameSuccess() {
    return this.#bridge.getBridgeSize() === this.#gameStat.get('moveCount');
  }

  isAlive() {
    return this.#gameStat.get('isAlive');
  }
}

module.exports = BridgeGame;
