const BridgeGame = require('../domain/BridgeGame');
const OutputView = require('../view/OutputView');
const InputView = require('../view/input/InputView');
const BridgeCtrlValidator = require('./BridgeCtrlValidator');
const ErrorView = require('../view/ErrorView');
const { RETRY, QUIT } = require('../contants/Options');

class BridgeCtrl {
  #game;

  start() {
    this.#game = new BridgeGame();
    this.initalize();
  }

  onReadBridgeSize(input) {
    try {
      this.#game.initalize(Number(input));
      this.play();
    } catch (error) {
      ErrorView.print(error);
      this.initalize();
    }
  }

  initalize() {
    InputView.readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadMoving(input) {
    try {
      this.#game.move(input);
      OutputView.printMap(this.#game.getMoves(), this.#game.isMovesPossible());
      this.manageProgress();
    } catch (error) {
      ErrorView.print(error);
      this.play();
    }
  }

  play() {
    InputView.readMoving(this.onReadMoving.bind(this));
  }

  manageProgress() {
    const gameWin = this.#game.isWin();
    const gameLose = this.#game.isLose();
    if (gameWin) this.close();
    if (gameLose) this.askCommand();
    if (!gameWin && !gameLose) this.play();
  }

  onReadGameCommand(gameCommand) {
    try {
      BridgeCtrlValidator.validateGameCommand(gameCommand);
      if (gameCommand === RETRY) this.retry();
      if (gameCommand === QUIT) this.close();
    } catch (error) {
      ErrorView.print(error);
      this.askCommand();
    }
  }

  askCommand() {
    InputView.readGameCommand(this.onReadGameCommand.bind(this));
  }

  retry() {
    this.#game.retry();
    this.play();
  }

  close() {
    const result = this.#game.isWin();
    OutputView.printFinalMap(
      this.#game.getMoves(),
      this.#game.isMovesPossible()
    );
    OutputView.printResult(result, this.#game.getTryCount());
  }
}

module.exports = BridgeCtrl;
