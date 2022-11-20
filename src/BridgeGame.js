const { MAP_ELEMENT } = require('./constant');
const BridgeMap = require('./models/BridgeMap');

class BridgeGame {
  #bridge;
  #curTargetCell;
  #numberOfAttempts;
  #bridgeMap;

  constructor(bridge) {
    this.#bridge = bridge;
    console.log(this.#bridge);
    this.#curTargetCell = 0;
    this.#numberOfAttempts = 1;
    this.#bridgeMap = new BridgeMap();
  }

  move(direction) {
    const nextCellDirection = this.#bridge[this.#curTargetCell];
    const isCorrectDirection = direction === nextCellDirection;
    if (isCorrectDirection) this.#curTargetCell += 1;

    return isCorrectDirection;
  }

  drawMap(isCorrectDirection, direction) {
    const elem = isCorrectDirection ? MAP_ELEMENT.CROSS : MAP_ELEMENT.FAIL;

    return Object.values(this.#bridgeMap.updateMap(direction, elem));
  }

  retry(command) {
    const shouldRetry = command === 'R';
    if (shouldRetry) {
      this.#numberOfAttempts += 1;
      this.#curTargetCell = 0;
      this.#bridgeMap.initMap();
    }

    return shouldRetry;
  }

  gameComplete() {
    return this.#bridge.length === this.#curTargetCell;
  }

  gameResult(userWin = false) {
    const bridgeMap = Object.values(this.#bridgeMap.getMap());

    return [bridgeMap, userWin, this.#numberOfAttempts];
  }
}

module.exports = BridgeGame;
