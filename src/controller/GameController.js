const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { validateNext, validateGameCommand } = require('../errorHandling');
const { GAME } = require('../utils/constant');

class GameController {
  #tryCount;

  constructor() {
    this.game = new BridgeGame();
    this.#tryCount = 1;
  }

  start() {
    Console.print(GAME.START);
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
    validateNext.validate(next);

    const isSuccess = this.game.move(next);
    OutputView.printMap(this.game.getMap(), isSuccess);

    if (isSuccess) this.game.isEnd() ? this.end(true) : this.askMoving();
    if (!isSuccess) this.askGameCommand();
  }

  askGameCommand() {
    InputView.readGameCommand(this.setGameCommand.bind(this));
  }

  setGameCommand(gameCommand) {
    validateGameCommand.validate(gameCommand);

    if (gameCommand === 'R') this.retry();
    if (gameCommand === 'Q') this.end(false);
  }

  retry() {
    this.#tryCount += 1;
    this.game.retry();
    this.askMoving();
  }

  end(isDone) {
    Console.print(GAME.END);
    OutputView.printResult(isDone, this.#tryCount, this.game.getMap());
  }
}

module.exports = GameController;
