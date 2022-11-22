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

      this.startBridgeGame(bridgeLength);
      this.getMoving();
    });
  }

  startBridgeGame(bridgeLength) {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.set(bridgeLength);
  }

  getMoving() {
    InputView.readMoving((moving) => {
      new MovingValidator(moving).validate();

      const result = this.#bridgeGame.move(moving);
      OutputView.printMap(this.#bridgeGame);

      this.checkNextProcess(result);
    });
  }

  checkNextProcess({ isSuccess, isDestination }) {
    if (!isSuccess) return this.getQuitMessage(isSuccess);

    if (isSuccess && isDestination) return this.quit();

    return this.getMoving();
  }

  getQuitMessage() {
    InputView.readGameCommand((command) => {
      new GameCommandValidator(command).validate();

      if (command === INPUT_SIGN.RETRY) this.retry();

      if (command === INPUT_SIGN.QUIT) this.quit();
    });
  }

  retry() {
    this.#bridgeGame.retry();
    this.getMoving();
  }

  quit() {
    OutputView.printResult(this.#bridgeGame);
  }
}

module.exports = BridgeGameController;
