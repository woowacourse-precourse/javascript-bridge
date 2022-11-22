const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { GAME } = require('../utils/constant');

class GameController {
  constructor() {
    this.game = new BridgeGame();
  }

  start() {
    OutputView.printStart();
    this.askBridge();
  }

  askBridge() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    try {
      this.game.setBridge(size);
      this.askMoving();
    } catch (err) {
      OutputView.printMessage(err);
      this.askBridge();
    }
  }

  askMoving() {
    InputView.readMoving(this.setMoving.bind(this));
  }

  setMoving(next) {
    try {
      BridgeGame.setMoving(next);
      const isSuccess = this.game.move(next);
      OutputView.printMap(this.game.getMap(), isSuccess);
      this.judgeMoving(isSuccess);
    } catch (err) {
      OutputView.printMessage(err);
      this.askMoving();
    }
  }

  judgeMoving(isSuccess) {
    if (isSuccess && this.game.isEnd()) this.end(true);
    if (isSuccess && !this.game.isEnd()) this.askMoving();
    if (!isSuccess) this.askGameCommand();
  }

  askGameCommand() {
    InputView.readGameCommand(this.setGameCommand.bind(this));
  }

  setGameCommand(gameCommand) {
    try {
      BridgeGame.setGameCommand(gameCommand);
      this.judgeGameCommand(gameCommand);
    } catch (err) {
      OutputView.printMessage(err);
      this.askGameCommand();
    }
  }

  judgeGameCommand(gameCommand) {
    if (gameCommand === GAME.RETRY) this.retry();
    if (gameCommand === GAME.QUICK) this.end(false);
  }

  retry() {
    this.game.retry();
    this.askMoving();
  }

  end(isDone) {
    const result = isDone ? GAME.SUCCESS : GAME.FAIL;
    OutputView.printResult(result, this.game.getTryCount(), this.game.getMap());
  }
}

module.exports = GameController;
