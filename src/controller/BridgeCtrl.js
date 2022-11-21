const BridgeGame = require('../domain/BridgeGame');
const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeCtrlValidator = require('./BridgeCtrlValidator');

class BridgeCtrl {
  #game;

  start() {
    this.#game = new BridgeGame();
    this.initalizeGame();
  }

  initalizeGame() {
    const onReadBridgeSize = (input) => {
      this.#game.initalize(Number(input));
      this.playBridgeGame();
    };
    InputView.readBridgeSize(onReadBridgeSize);
  }

  playBridgeGame() {
    const onReadMoving = (input) => {
      this.#game.move(input);
      OutputView.printMap(this.#game.getMoves(), this.#game.isMovesPossible());
      this.manageGameProgress();
    };
    InputView.readMoving(onReadMoving);
  }

  manageGameProgress() {
    const gameWin = this.#game.isGameWin();
    const gameLose = this.#game.isGameLose();
    if (gameWin) this.closeGame();
    if (gameLose) this.askMoreChance();
    if (!gameWin && !gameLose) this.playBridgeGame();
  }

  askMoreChance() {
    const onReadGameCommand = (gameCommand) => {
      BridgeCtrlValidator.validateGameCommand(gameCommand);
      if (gameCommand === 'R') this.retryGame();
      if (gameCommand === 'Q') this.closeGame();
    };
    InputView.readGameCommand(onReadGameCommand);
  }

  retryGame() {
    this.#game.retry();
    this.playBridgeGame();
  }

  closeGame() {
    const result = this.#game.isGameWin();
    OutputView.printResult(result, this.#game.getTryCount());
  }
}

module.exports = BridgeCtrl;
