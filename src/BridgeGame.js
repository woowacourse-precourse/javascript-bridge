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
    this.#direction = new Direction(direction);
    this.#direction.setSuccessful(
      this.#bridge.getBridge()[this.#player.getCurPlace()]
    );
  }

  move() {
    const successful = this.#direction.getSuccessful();
    this.#player.increaseCurPlace();

    successful
      ? this.#bridge.updateMap(this.#direction.getDirection(), 'O')
      : this.#bridge.updateMap(this.#direction.getDirection(), 'X');

    return successful;
  }

  curMap() {
    return Object.values(this.#bridge.getMap());
  }

  retry(command) {
    this.#command = new Command(command);
    return this.#command.shouldRetry();
  }

  gameComplete() {
    if (this.#bridge.getSize() === this.#player.getCurPlace()) {
      this.#player.setSuccess();
      return true;
    }
    return false;
  }

  increaseNumberOfAttempts() {
    this.#player.increaseNumberOfAttempts();
  }

  initPlayData() {
    this.#player.initCurPlace();
    this.#bridge.initMap();
  }

  gameResult() {
    return [
      Object.values(this.#bridge.getMap()),
      this.#player.getSuccess(),
      this.#player.getNumberOfAttempts(),
    ];
  }
}

module.exports = BridgeGame;
