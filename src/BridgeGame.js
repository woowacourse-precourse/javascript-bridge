const Player = require('./models/Player');
const Bridge = require('./models/Bridge');
const Command = require('./models/Command');
const Direction = require('./models/Direction');
const { MAP_ELEMENT } = require('./constant');

class BridgeGame {
  #player;
  #bridge;

  constructor() {
    this.#player = new Player();
  }

  makeBridge(size) {
    this.#bridge = new Bridge(size);
  }

  move(direction) {
    const bridge = this.#bridge.getBridge();
    const nextCellDirection = bridge[this.#player.getCurPlace()];
    const successfulMove = new Direction(direction, nextCellDirection);
    this.#player.increaseCurPlace();

    return successfulMove;
  }

  drawMap(successful, direction) {
    successful
      ? this.#bridge.updateMap(direction, MAP_ELEMENT.CROSS)
      : this.#bridge.updateMap(direction, MAP_ELEMENT.FAIL);
  }

  curMap() {
    const curMapState = Object.values(this.#bridge.getMap());

    return curMapState;
  }

  retry(command) {
    const shouldRetry = new Command(command);

    return shouldRetry;
  }

  gameComplete() {
    const bridgeSize = this.#bridge.getSize();
    const curPlace = this.#player.getCurPlace();
    if (bridgeSize === curPlace) {
      this.#player.setSuccess();
    }

    return bridgeSize === curPlace;
  }

  increaseNumberOfAttempts() {
    this.#player.increaseNumberOfAttempts();
  }

  initPlayData() {
    this.#player.initCurPlace();
    this.#bridge.initMap();
  }

  gameResult() {
    const bridgeMap = Object.values(this.#bridge.getMap());
    const success = this.#player.getSuccess();
    const numberOfAttempts = this.#player.getNumberOfAttempts();

    return [bridgeMap, success, numberOfAttempts];
  }
}

module.exports = BridgeGame;
