const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

const RETRY_OR_NOT = { R: true, Q: false };

class App {
  #bridgeGame = new BridgeGame();

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.startGame);
  }

  startGame(bridgeLength) {
    this.#bridgeGame.setUp(bridgeLength);
    this.askMove();
  }

  askMove() {
    InputView.readMoving(this.moveOne);
  }

  moveOne(playerMoving) {
    this.#bridgeGame.move(playerMoving);
    if (this.checkIsFinished()) {
      return this.askRetry();
    }
    return this.askMove();
  }

  checkIsFinished() {
    const { isFinished } = this.#bridgeGame.getStatus;
    return isFinished;
  }

  askRetry() {
    InputView.readGameCommand(this.checkRetry);
  }

  checkRetry(command) {
    if (RETRY_OR_NOT[command]) {
      this.#bridgeGame.undoOneStep();
      return this.askMove();
    }
  }
}

module.exports = App;
