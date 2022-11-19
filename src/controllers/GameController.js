const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const BridgeGame = require('../models/BridgeGame');

class GameContoller {
  #bridgeGame;

  start() {
    OutputView.printStarting();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.onInputBridgeSize.bind(this));
  }

  onInputBridgeSize(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    this.#bridgeGame = new BridgeGame(bridge);

    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this.onInputMoving.bind(this));
  }

  onInputMoving(moving) {
    this.#bridgeGame.move(moving);
  }
}

module.exports = GameContoller;
