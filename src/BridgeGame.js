const { MAP_ELEMENT } = require('./constant');
const BridgeMap = require('./models/BridgeMap');
const { retryOrQuit, successfullyMove } = require('./HandleCommand');

class BridgeGame {
  #bridge;
  #curPlace;
  #numberOfAttempts;
  #bridgeMap;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#curPlace = 0;
    console.log(this.#bridge);
    this.#numberOfAttempts = 1;
    this.#bridgeMap = new BridgeMap();
  }

  move(direction) {
    const nextCellDirection = this.#bridge[this.#curPlace++];
    const successful = successfullyMove(direction, nextCellDirection);

    return successful;
  }

  drawMap(successful, direction) {
    const elem = successful ? MAP_ELEMENT.CROSS : MAP_ELEMENT.FAIL;

    return Object.values(this.#bridgeMap.updateMap(direction, elem));
  }

  retry(command) {
    return retryOrQuit(command);
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
