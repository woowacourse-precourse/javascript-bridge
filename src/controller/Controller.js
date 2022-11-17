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
    }
  }

  printCrossing() {
    OutputView.printMap(this.#bridgeGame.printCrossingBridge());
  }

  progress() {
    InputView.readMoving(this.move.bind(this));
  }
}

module.exports = Controller;
