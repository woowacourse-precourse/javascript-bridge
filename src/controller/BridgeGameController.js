const BridgeGame = require('../model/BridgeGame');
const BridgeLengthValidator = require('../validator/BridgeLengthValidator');
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
      this.#bridgeGame.move(moving);
      const [upside, downside] = this.#bridgeGame.toStringMap();

      OutputView.printMap(upside, downside);
    });
  }
}

module.exports = BridgeGameController;
