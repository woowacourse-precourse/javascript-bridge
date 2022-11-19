const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class BridgeGameController {
  #bridgeGame;
  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  start() {
    OutputView.printStart();
    this.readBridgeSize();
  }

  readBridgeSize() {
    const onReadBridgeSize = (bridgeSize) => {
      this.makeBridgePattern(bridgeSize);
    };
    InputView.readBridgeSize(onReadBridgeSize);
  }

  makeBridgePattern(bridgeSize) {
    const bridgePattern = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.createBridge(bridgeSize, [...bridgePattern]);
  }

  createBridge(bridgeSize, bridgePattern) {
    this.#bridgeGame.createBridge(bridgeSize, bridgePattern);
  }
}

module.exports = BridgeGameController;
