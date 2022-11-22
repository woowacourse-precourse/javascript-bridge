const BridgeGame = require('../model/BridgeGame');
const { GAME_COMMAND, MOVABLE } = require('../data/constants');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Validator = require('../utils/Validator');
const IO = require('../utils/IO');

class GameController {
  #game;

  constructor() {
    this.#game = new BridgeGame();
  }

  init() {
    InputView.readBridgeSize((length) => {
      Validator.handleException(
        () => Validator.validateBridgeLength(length),
        () => { this.#game.initBridge(length); this.moveInput(0); },
        () => this.init(),
      );
    });
  }

  checkProcess(movable, isSuccess) {
    IO.output(movable);
    if (movable === MOVABLE.IMMOVABLE) {
      this.checkRetry();
    }
    if (isSuccess === true) {
      this.quit();
    }
  }

  printProgress(direction, index) {
    const { movable, isSuccess } = this.#game.move(direction, index);
    OutputView.printMap(this.#game.moveProcess(index, direction));

    this.checkProcess(movable, isSuccess);
    if (isSuccess === false && movable === MOVABLE.MOVABLE) {
      this.moveInput(index + 1);
    }
  }

  moveInput(index) {
    InputView.readMoving((direction) => {
      Validator.handleException(
        () => Validator.validateBridgeDirection(direction),
        () => this.printProgress(direction, index),
        () => this.moveInput(index),
      );
    });
  }

  retryOrQuit(command) {
    if (command === GAME_COMMAND.RETRY) {
      this.#game.retry();
      this.moveInput(0);
    } else {
      this.quit();
    }
  }

  checkRetry() {
    InputView.readGameCommand((command) => {
      Validator.handleException(
        () => Validator.validateGameCommand(command),
        () => this.retryOrQuit(command),
        () => this.checkRetry(),
      );
    });
  }

  quit() {
    const { progress, isSuccess, tryCount } = this.#game.quit();
    OutputView.printResult(tryCount, isSuccess, progress);
    IO.close();
  }
}
module.exports = GameController;
