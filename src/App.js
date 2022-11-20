const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );

    const bridgeGame = BridgeGame(bridge);
    const moving = InputView.readMoving();
    bridgeGame.move(moving);
  }
}

module.exports = App;
