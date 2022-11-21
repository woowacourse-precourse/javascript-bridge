const BridgeGame = require('../domain/BridgeGame');
const OutputView = require('../view/OutputView');
const InputView = require('../view/input/InputView');
const BridgeCtrlValidator = require('./BridgeCtrlValidator');
const { RETRY, QUIT } = require('../contants/Options');

class BridgeCtrl {
  #game;

  start() {
    this.#game = new BridgeGame();
    this.initalize();
  }

  initalize() {
    const onReadBridgeSize = (input) => {
      this.#game.initalize(Number(input));
      this.play();
    };
    InputView.readBridgeSize(onReadBridgeSize);
  }

  play() {
    const onReadMoving = (input) => {
      this.#game.move(input);
      OutputView.printMap(this.#game.getMoves(), this.#game.isMovesPossible());
      this.manageProgress();
    };
    InputView.readMoving(onReadMoving);
  }

  manageProgress() {
    const gameWin = this.#game.isWin();
    const gameLose = this.#game.isLose();
    if (gameWin) this.close();
    if (gameLose) this.askCommand();
    if (!gameWin && !gameLose) this.play();
  }

  askCommand() {
    const onReadGameCommand = (gameCommand) => {
      BridgeCtrlValidator.validateGameCommand(gameCommand);
      if (gameCommand === RETRY) this.retry();
      if (gameCommand === QUIT) this.close();
    };
    InputView.readGameCommand(onReadGameCommand);
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
