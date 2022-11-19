const Player = require('./models/Player');
const { MAP_ELEMENT } = require('./constant');
const BridgeMap = require('./models/BridgeMap');
const HandleCommand = require('./HandleCommand');

class BridgeGame {
  #bridge;
  #player;
  #bridgeMap;

  constructor(bridge) {
    this.#bridge = bridge;
    console.log(this.#bridge);
    this.#player = new Player();
    this.#bridgeMap = new BridgeMap();
  }

  move(direction) {
    const nextCell = this.#bridge[this.#player.getCurPlace()];
    const successfulMove = HandleCommand.direction(direction, nextCell);
    this.#player.increaseCurPlace();

    return successfulMove;
  }

  drawMap(successful, direction) {
    const elem = successful ? MAP_ELEMENT.CROSS : MAP_ELEMENT.FAIL;

    return Object.values(this.#bridgeMap.updateMap(direction, elem));
  }

  retry(command) {
    const shouldRetry = HandleCommand.retry(command);

    return shouldRetry;
  }

  gameComplete() {
    const bridgeSize = this.#bridge.length;
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
    this.#bridgeMap.initMap();
  }

  gameResult() {
    const bridgeMap = Object.values(this.#bridgeMap.getMap());
    const success = this.#player.getSuccess();
    const numberOfAttempts = this.#player.getNumberOfAttempts();

    return [bridgeMap, success, numberOfAttempts];
  }
}

module.exports = BridgeGame;
