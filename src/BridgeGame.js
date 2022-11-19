const { MAP_ELEMENT } = require('./constant');
const BridgeMap = require('./models/BridgeMap');
const { retryOrQuit, successfullyMove } = require('./HandleCommand');

class BridgeGame {
  #bridge;
  #curPlace;
  #numberOfAttempts;
  #success;
  #bridgeMap;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#curPlace = 0;
    this.#numberOfAttempts = 1;
    this.#success = false;
    this.#bridgeMap = new BridgeMap();
  }

  move(direction) {
    const nextCell = this.#bridge[this.#curPlace++];
    const successful = successfullyMove(direction, nextCell);

    return successful;
  }

  drawMap(successful, direction) {
    const elem = successful ? MAP_ELEMENT.CROSS : MAP_ELEMENT.FAIL;

    return Object.values(this.#bridgeMap.updateMap(direction, elem));
  }

  retry(command) {
    const shouldRetry = retryOrQuit(command);

    return shouldRetry;
  }

  gameComplete() {
    const bridgeSize = this.#bridge.length;
    if (bridgeSize === this.#curPlace) {
      this.#success = true;
    }

    return bridgeSize === this.#curPlace;
  }

  increaseNumberOfAttempts() {
    this.#numberOfAttempts += 1;
  }

  initPlayData() {
    this.#curPlace = 0;
    this.#bridgeMap.initMap();
  }

  gameResult() {
    const bridgeMap = Object.values(this.#bridgeMap.getMap());

    return [bridgeMap, this.#success, this.#numberOfAttempts];
  }
}

module.exports = BridgeGame;
