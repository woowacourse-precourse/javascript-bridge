const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeGame = require('../domain/BridgeGame');

class Controller {
  #bridgeGame;

  execute() {
    this.#bridgeGame = new BridgeGame();
    OutputView.printGameStart();
    InputView.readBridgeSize(this.createBridgeSize.bind(this));
  }

  createBridgeSize(answer) {
    this.#bridgeGame.execute(answer);
    InputView.readMoving(this.move.bind(this));
  }

  move(answer) {
    const isPassed = this.#bridgeGame.checkPanel(answer);

    this.#bridgeGame.move(answer, isPassed);
    this.printCrossing();

    if (isPassed) {
      this.progress();
      return;
    }

    this.fail();
  }

  printCrossing() {
    OutputView.printMap(this.#bridgeGame.printCrossingBridge());
  }

  progress() {
    if (this.#bridgeGame.checkGameWin()) {
      this.win();
      return;
    }

    InputView.readMoving(this.move.bind(this));
  }

  win() {
    this.printGameResult('success');
  }

  fail() {
    InputView.readGameCommand(this.retryOrQuit.bind(this));
  }

  retryOrQuit(answer) {
    BridgeGame.validate(answer);
    if (BridgeGame.isRetry(answer)) {
      this.#bridgeGame.retry();
      InputView.readMoving(this.move.bind(this));
    }
    if (BridgeGame.isQuit(answer)) {
      this.printGameResult('fail');
      BridgeGame.quit();
    }
  }

  printGameResult(type) {
    OutputView.printResult({
      crossingBridge: this.#bridgeGame.printCrossingBridge(),
      attempt: this.#bridgeGame.printAttempt(),
      result: BridgeGame.printResult(type),
    });
  }
}

module.exports = Controller;
