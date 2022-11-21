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

    const bridgeGame = new BridgeGame(bridge);

    for (let i = 0; i < bridgeSize; i++) {
      const moving = InputView.readMoving();
      const turnSuccess = bridgeGame.move(moving);

      OutputView.printMap(bridge, i, turnSuccess);

      if (!turnSuccess) {
        break;
      }
    }
  }
}

module.exports = App;
