const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const RETRY = { R: true, Q: false };

class BridgeGameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  run() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(bridgeLength) {
    this.#bridgeGame.setBridge(bridgeLength);
    return this.askMove();
  }

  askMove() {
    InputView.readMoving(this.move.bind(this));
  }

  move(direction) {
    this.#bridgeGame.move(direction);
    OutputView.printMap(this.#bridgeGame.getBridgeMap());
    return this.checkStatus();
  }

  checkStatus() {
    if (this.#bridgeGame.isSuccessful()) {
      return this.finishGame();
    }
    if (this.#bridgeGame.isGameOver()) {
      return this.askRetry();
    }
    return this.askMove();
  }

  askRetry() {
    InputView.readGameCommand(this.checkRetry.bind(this));
  }

  checkRetry(command) {
    if (RETRY[command]) {
      this.#bridgeGame.retry();
      return this.askMove();
    }
    return this.finishGame();
  }

  finishGame() {
    OutputView.printResult(
      this.#bridgeGame.getBridgeMap(),
      this.#bridgeGame.isSuccessful(),
      this.#bridgeGame.getNumberOfAttempts()
    );
  }
}

module.exports = BridgeGameController;
