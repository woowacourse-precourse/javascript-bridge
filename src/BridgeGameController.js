const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const RETRY = { R: true, Q: false };

class BridgeGameController {
  #bridgeGame;

  #numberOfAttempts;

  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.#numberOfAttempts = 1;
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
    if (this.#bridgeGame.isGameOver()) {
      return this.checkSuccessful();
    }

    return this.askMove();
  }

  checkSuccessful() {
    if (this.#bridgeGame.isSuccessful()) {
      return this.finishGame();
    }

    return this.askRetry();
  }

  finishGame() {
    OutputView.printResult(
      this.#bridgeGame.getBridgeMap(),
      this.#bridgeGame.isSuccessful(),
      this.#numberOfAttempts
    );
  }

  askRetry() {
    InputView.readGameCommand(this.checkRetry.bind(this));
  }

  checkRetry(command) {
    if (RETRY[command]) {
      this.#numberOfAttempts += 1;
      this.#bridgeGame.retry();
      return this.askMove();
    }

    return this.finishGame();
  }
}

module.exports = BridgeGameController;
