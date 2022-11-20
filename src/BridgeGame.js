const { MAP_ELEMENT } = require('./constant');
const BridgeMap = require('./models/BridgeMap');

class BridgeGame {
  #bridge;
  #curPlace;
  #numberOfAttempts;
  #bridgeMap;

  constructor(bridge) {
    this.#bridge = bridge;
    console.log(this.#bridge);
    this.#curPlace = 0;
    this.#numberOfAttempts = 1;
    this.#bridgeMap = new BridgeMap();
  }

  move(direction) {
    const nextCellDirection = this.#bridge[this.#curPlace];
    const isCorrectDirection = direction === nextCellDirection;
    if (isCorrectDirection) this.#curPlace += 1;

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
      this.#curPlace = 0;
      this.#bridgeMap.initMap();
    }

    return shouldRetry;
  }

  gameComplete() {
    return this.#bridge.length === this.#curPlace;
  }

  gameResult(userWin = false) {
    const bridgeMap = Object.values(this.#bridgeMap.getMap());

    return [bridgeMap, userWin, this.#numberOfAttempts];
  }
}

module.exports = BridgeGame;
