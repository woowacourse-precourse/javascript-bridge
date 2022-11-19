const Player = require('./models/Player');
const Command = require('./models/Command');
const Direction = require('./models/Direction');
const { MAP_ELEMENT } = require('./constant');
const BridgeMap = require('./models/BridgeMap');

class BridgeGame {
  #player;
  #bridge;
  #bridgeMap;

  constructor(bridge) {
    this.#player = new Player();
    this.#bridgeMap = new BridgeMap();
    this.#bridge = bridge;
  }

  move(direction) {
    const nextCellDirection = this.#bridge[this.#player.getCurPlace()];
    const successfulMove = new Direction(direction, nextCellDirection);
    this.#player.increaseCurPlace();

    return successfulMove;
  }

  drawMap(successful, direction) {
    const elem = successful ? MAP_ELEMENT.CROSS : MAP_ELEMENT.FAIL;

    return Object.values(this.#bridgeMap.updateMap(direction, elem));
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
