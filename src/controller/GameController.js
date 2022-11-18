const { MESSAGE } = require('../constant');
const BridgeGame = require('../BridgeGame');

class GameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  gameStart() {
    this.#bridgeGame.printMessage(MESSAGE.START_NOTIFICATION);
  }

  printMessage(errorMessage) {
    this.#bridgeGame.printMessage(errorMessage);
  }

  handleSize(size) {
    this.#bridgeGame.makeBridge(size);
  }

  handleDirection(direction) {
    this.#bridgeGame.handleDirection(direction);
  }

  move() {
    const successful = this.#bridgeGame.move();
    return successful;
  }

  printCurMap() {
    this.#bridgeGame.printCurMap();
  }

  isAllCrossed() {
    const isComplete = this.#bridgeGame.checkGameComplete();
    return isComplete;
  }

  printGameResult() {
    this.#bridgeGame.printGameResult();
  }

  handleCommand(command) {
    return this.#bridgeGame.retry(command);
  }

  retry() {
    this.#bridgeGame.increaseNumberOfAttempts();
    this.#bridgeGame.initPlayData();
  }

  gameOver() {
    this.#bridgeGame.printGameResult();
  }
}

module.exports = GameController;
