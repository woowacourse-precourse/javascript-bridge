const { MAP_ELEMENT } = require('./constant');
const BridgeMap = require('./models/BridgeMap');
const { doseUserChooseRetry, isCorrectDirection } = require('./HandleCommand');

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
    const successful = direction === nextCellDirection;
    if (successful) this.#curPlace += 1;

    return successful;
  }

  drawMap(successful, direction) {
    const elem = successful ? MAP_ELEMENT.CROSS : MAP_ELEMENT.FAIL;

    return Object.values(this.#bridgeMap.updateMap(direction, elem));
  }

  retry(command) {
    return command === 'R';
  }

  gameComplete() {
    return this.#bridge.length === this.#curPlace;
  }

  increaseNumberOfAttempts() {
    this.#numberOfAttempts += 1;
  }

  initPlayData() {
    this.#curPlace = 0;
    this.#bridgeMap.initMap();
  }

  gameResult(userWin = false) {
    const bridgeMap = Object.values(this.#bridgeMap.getMap());

    return [bridgeMap, userWin, this.#numberOfAttempts];
  }
}

module.exports = BridgeGame;
