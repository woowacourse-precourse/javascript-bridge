const Validator = require('./Validator');
const Player = require('./Player');
const Bridge = require('./Bridge');
const OutputView = require('./views/OutputView');
const Command = require('./Command');

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

  move(direction) {
    Validator.directionValidityCheck(direction);
    const canCross =
      direction === this.#bridge.getBridge()[this.#player.getCurPlace()];
    this.#player.increaseCurPlace();
    if (canCross) this.#bridge.updateBridgeMap(direction, 'O');
    else this.#bridge.updateBridgeMap(direction, 'X');

    return canCross;
  }

  printCurMap() {
    const curMap = Object.values(this.#bridge.getBridgeMap());
    OutputView.printMap(curMap);
  }

  handleCommand(command) {
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
    this.#bridge.initBridgeMap();
  }

  printGameResult() {
    OutputView.printResult(
      Object.values(this.#bridge.getBridgeMap()),
      this.#player.getSuccess(),
      this.#player.getNumberOfAttempts()
    );
  }
}

module.exports = BridgeGame;
