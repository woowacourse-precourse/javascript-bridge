const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const InputView = require('./InputView');

class BridgeGameController {
  constructor() {
    OutputView.printStart();
    this.bridgeGame = new BridgeGame();
    this.random = BridgeRandomNumberGenerator.generate;
  }

  inputBridgeSize() {
    InputView.readBridgeSize((length) => {
      length = Number(length);
      this.bridgeGame.setBridgeLength(length);
      const bridge = BridgeMaker.makeBridge(length, this.random);
      this.bridgeGame.setBridge(bridge);
    });
  }

}

module.exports = BridgeGameController;
