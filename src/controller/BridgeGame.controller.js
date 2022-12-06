const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class BridgeGameController {
  game;

  constructor(game) {
    this.game = game;
  }

  start() {
    OutputView.printStart();
    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize(this);
  }

  setupGame(size) {
    this.game.setup(size);
    OutputView.printEmptyLine();
  }

  readMoving() {
    InputView.readMoving(this);
  }

  move(direction) {
    this.game.move(direction);
    const { win, up, down, isLast, tryCount } = this.game.getResult(direction);
    OutputView.printMap({ up, down });
    if (isLast) return OutputView.printResult({ up, down, win, tryCount });
    if (win) return this.readMoving();
    this.#readGameCommand();
  }

  #readGameCommand() {
    InputView.readGameCommand(this);
  }

  tryOfExit(command) {
    if (command === "R") return this.#retry();
    if (command === "Q") return this.#exit();
  }

  #retry() {
    this.game.resetHistory();
    this.readMoving();
  }

  #exit() {
    OutputView.printResult(this.game.getResult());
  }
}

module.exports = BridgeGameController;
