const BridgeGame = require('../model/BridgeGame');
const { BRIDGE_MESSAGE } = require('../utils/constant');
const BridgeLengthValidator = require('../validator/BridgeLengthValidator');
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
      this.printCurrentMap();

      if (!isSuccess) this.getQuitMessage();
    });
  }

  printCurrentMap() {
    const [upside, downside] = this.#bridgeGame.toStringMap();

    OutputView.printMap(upside, downside);
  }

  getQuitMessage() {
    InputView.readGameCommand((command) => {
      if (command === BRIDGE_MESSAGE.RETRY_SIGN) {
        this.#bridgeGame.retry();
        return;
      }

      this.quit();
    });
  }

  quit() {}
}

module.exports = BridgeGameController;
