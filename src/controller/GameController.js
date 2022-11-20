const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #tryCount;

  constructor() {
    this.game = new BridgeGame();
    this.#tryCount = 1;
  }

  start() {
    OutputView.printStart();
    this.askBridge();
  }

  askBridge() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    this.game.setBridge(size);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.setMoving.bind(this));
  }

  setMoving(next) {
    this.game.setMoving(next);

    const isSuccess = this.game.move(next);
    OutputView.printMap(this.game.getMap(), isSuccess);

    if (isSuccess) this.game.isEnd() ? this.end(true) : this.askMoving();
    if (!isSuccess) this.askGameCommand();
  }

  askGameCommand() {
    InputView.readGameCommand(this.setGameCommand.bind(this));
  }

  setGameCommand(gameCommand) {
    this.game.setGameCommand(gameCommand);

    if (gameCommand === 'R') this.retry();
    if (gameCommand === 'Q') this.end(false);
  }

  retry() {
    this.#tryCount += 1;
    this.game.retry();
    this.askMoving();
  }

  end(isDone) {
    const result = isDone ? '성공' : '실패';
    OutputView.printResult(result, this.#tryCount, this.game.getMap());
  }
}

module.exports = GameController;
