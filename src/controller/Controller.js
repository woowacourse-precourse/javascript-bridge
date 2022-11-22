const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeGame = require('../domain/BridgeGame');
const GameCommand = require('../domain/GameCommand');

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
    this.progress(isPassed);
  }

  printCrossing() {
    OutputView.printMap(this.#bridgeGame.printCrossingBridge());
  }

  progress(isPassed) {
    if (isPassed) {
      this.checkWin();
      return;
    }

    this.fail();
  }

  checkWin() {
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
    if (GameCommand.isRetry(answer)) {
      this.retry();
    }
    if (GameCommand.isQuit(answer)) {
      this.quit();
    }
  }

  retry() {
    this.#bridgeGame.retry();
    InputView.readMoving(this.move.bind(this));
  }

  quit() {
    this.printGameResult('quit');
    BridgeGame.quit();
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
