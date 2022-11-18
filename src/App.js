const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

const RETRY_OR_NOT = { R: true, Q: false };

class App {
  #bridgeGame = new BridgeGame();

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.startGame.bind(this));
  }

  startGame(bridgeLength) {
    this.#bridgeGame.setUp(bridgeLength);
    this.askMove();
  }

  askMove() {
    InputView.readMoving(this.moveOne.bind(this));
  }

  moveOne(playerMoving) {
    this.#bridgeGame.move(playerMoving);
    OutputView.printMap(this.#bridgeGame.getBridgeMap());
    if (this.checkIsSuccess()) {
      return OutputView.printResult(
        this.#bridgeGame.getBridgeMap(),
        this.#bridgeGame.getStatus()
      );
    }
    if (this.checkIsFinished()) {
      return this.askRetry();
    }
    return this.askMove();
  }

  checkIsSuccess() {
    const { isSuccess } = this.#bridgeGame.getStatus();
    return isSuccess;
  }

  checkIsFinished() {
    const { isFinished } = this.#bridgeGame.getStatus();
    return isFinished;
  }

  askRetry() {
    InputView.readGameCommand(this.checkRetry.bind(this));
  }

  checkRetry(command) {
    if (RETRY_OR_NOT[command]) {
      this.#bridgeGame.retry();
      return this.askMove();
    }
    return OutputView.printResult(
      this.#bridgeGame.getBridgeMap(),
      this.#bridgeGame.getStatus()
    );
  }
}

module.exports = App;

const app = new App();
app.play();
