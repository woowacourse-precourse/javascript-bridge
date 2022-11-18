const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

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
}

module.exports = App;
