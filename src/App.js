const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./Views/InputView");
const OutputView = require("./Views/OutputView");
const { MESSAGE, COMMAND } = require("./constants/constant");

class App {
  #bridgeGame;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.tryMakeBridge.bind(this));
  }

  tryMakeBridge(input) {
    const size = Number(input);
    try {
      this.#bridgeGame = new BridgeGame(size);
      InputView.readMoving(this.tryMove.bind(this));
    } catch ({ message }) {
      Console.print(message);
      InputView.readBridgeSize(this.tryMakeBridge.bind(this));
    }
  }

  tryMove(input) {
    try {
      this.#bridgeGame.move(input);
      OutputView.printMap(this.#bridgeGame);
      const result = this.#bridgeGame.getResult();
      this.handleResult(result);
    } catch ({ message }) {
      Console.print(message);
      InputView.readMoving(this.tryMove.bind(this));
    }
  }

  tryRetry(input) {
    try {
      this.#bridgeGame.validateGameCommand(input);
      this.handleGameCommand(input);
    } catch ({ message }) {
      Console.print(message);
      InputView.readGameCommand(this.tryRetry.bind(this));
    }
  }

  handleResult(result) {
    if (result === MESSAGE.SUCCESS) {
      OutputView.printResult(this.#bridgeGame);
      return;
    }
    if (result === MESSAGE.FAILURE) {
      InputView.readGameCommand(this.tryRetry.bind(this));
      return;
    }
    InputView.readMoving(this.tryMove.bind(this));
  }

  handleGameCommand(input) {
    if (input === COMMAND.QUIT) {
      OutputView.printResult(this.#bridgeGame);
      return;
    }
    this.#bridgeGame.retry();
    InputView.readMoving(this.tryMove.bind(this));
  }
}

module.exports = App;
