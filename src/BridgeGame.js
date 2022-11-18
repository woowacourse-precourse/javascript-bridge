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
  }

  move() {
    const canCross = this.#direction.getCanCross(
      this.#bridge.getBridge()[this.#player.getCurPlace()]
    );
    this.#player.increaseCurPlace();
    if (canCross) this.#bridge.updateMap(this.#direction.getDirection(), 'O');
    else this.#bridge.updateMap(this.#direction.getDirection(), 'X');

    return canCross;
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
