const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

const RETRY = { R: true, Q: false };

class BridgeGameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  run() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.setUpGame.bind(this));
  }

  setUpGame(bridgeLength) {
    this.#bridgeGame.setUp(bridgeLength);
    return this.askMove();
  }

  askMove() {
    InputView.readMoving(this.moveOneStep.bind(this));
  }

  moveOneStep(direction) {
    this.#bridgeGame.move(direction);
    OutputView.printMap(this.#bridgeGame.getBridgeMap());
    return this.checkStatus();
  }

  checkStatus() {
    if (this.isCrossed()) {
      return this.finishGame();
    }
    if (this.isGameOver()) {
      return this.askRetry();
    }
    return this.askMove();
  }

  isCrossed() {
    const { crossed } = this.#bridgeGame.getStatus();
    return crossed;
  }

  isGameOver() {
    const { gameOver } = this.#bridgeGame.getStatus();
    return gameOver;
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
      this.#bridgeGame.getStatus(),
      this.#bridgeGame.getNumberOfAttempts()
    );
  }
}

module.exports = BridgeGameController;
