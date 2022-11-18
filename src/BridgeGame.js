const Player = require('./models/Player');
const Bridge = require('./models/Bridge');
const Command = require('./models/Command');
const Direction = require('./models/Direction');

class BridgeGame {
  #player;
  #bridge;
  #command;
  #direction;

  constructor() {
    this.#player = new Player();
  }

  makeBridge(size) {
    this.#bridge = new Bridge(size);
  }

  handleDirection(direction) {
    const nextCellDirection =
      this.#bridge.getBridge()[this.#player.getCurPlace()];

    this.#direction = new Direction(direction);
    this.#direction.setSuccessful(nextCellDirection);
  }

  move() {
    const successfulMove = this.#direction.getSuccessful();
    const direction = this.#direction.getDirection();
    this.#player.increaseCurPlace();
    successfulMove
      ? this.#bridge.updateMap(direction, 'O')
      : this.#bridge.updateMap(direction, 'X');

    return successfulMove;
  }

  curMap() {
    const curMapState = Object.values(this.#bridge.getMap());

    return curMapState;
  }

  retry(command) {
    this.#command = new Command(command);

    return this.#command.shouldRetry();
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
