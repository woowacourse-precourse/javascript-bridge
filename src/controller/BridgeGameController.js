const BridgeGame = require('../model/BridgeGame');
const { INPUT_SIGN } = require('../utils/constant');
const BridgeLengthValidator = require('../validator/BridgeLengthValidator');
const GameCommandValidator = require('../validator/GameCommandValidator');
const MovingValidator = require('../validator/MovingValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGameController {
  #bridgeGame;

  start() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize((bridgeLength) => {
      new BridgeLengthValidator(bridgeLength).validate();

      this.createBridge(bridgeLength);
      this.getMoving();
    });
  }

  createBridge(bridgeLength) {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.setBridge(bridgeLength);
  }

  getMoving() {
    InputView.readMoving((moving) => {
      new MovingValidator(moving).validate();

      const isSuccess = this.#bridgeGame.move(moving);
      OutputView.printMap(this.#bridgeGame);

      this.checkNextProcess(isSuccess);
    });
  }

  checkNextProcess(isSuccess) {
    if (!isSuccess) return this.getQuitMessage(isSuccess);

    if (isSuccess && this.#bridgeGame.isDestination()) {
      return this.quit(isSuccess);
    }

    return this.getMoving();
  }

  getQuitMessage(isSuccess) {
    InputView.readGameCommand((command) => {
      new GameCommandValidator(command).validate();

      if (command === INPUT_SIGN.RETRY) {
        this.#bridgeGame.retry();
        this.getMoving();
      }

      if (command === INPUT_SIGN.QUIT) this.quit(isSuccess);
    });
  }

  quit(isSuccess) {
    OutputView.printResult(this.#bridgeGame, isSuccess);
  }
}

module.exports = BridgeGameController;
