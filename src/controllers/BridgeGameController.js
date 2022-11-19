const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeGameController {
  #bridgeGame;
  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  start() {
    OutputView.printStart();
    return this.readBridgeSize();
  }

  readBridgeSize() {
    const onReadBridgeSize = (bridgeSize) => {
      return this.makeBridgePattern(bridgeSize);
    };
    InputView.readBridgeSize(onReadBridgeSize);
  }

  makeBridgePattern(bridgeSize) {}
}

module.exports = BridgeGameController;
