const Player = require('./models/Player');
const Bridge = require('./models/Bridge');
const OutputView = require('./views/OutputView');
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

  printMessage(message) {
    OutputView.printMessage(message);
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
    this.#player.increaseCurPlace();
    if (this.#direction.getSuccessful()) {
      this.#bridge.updateMap(this.#direction.getDirection(), 'O');
    } else {
      this.#bridge.updateMap(this.#direction.getDirection(), 'X');
    }

    return this.#direction.getSuccessful();
  }

  printCurMap() {
    const curMap = Object.values(this.#bridge.getMap());
    OutputView.printMap(curMap);
  }

  retry(command) {
    this.#command = new Command(command);
    return this.#command.shouldRetry();
  }

  checkGameComplete() {
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

  printGameResult() {
    OutputView.printResult(
      Object.values(this.#bridge.getMap()),
      this.#player.getSuccess(),
      this.#player.getNumberOfAttempts()
    );
  }
}

module.exports = BridgeGame;
