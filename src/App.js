const { InputView, OutputView } = require('./Console');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    const bridgeGame = new BridgeGame(bridge);
    const nextMoveChar = InputView.readMoving();
    bridgeGame.move(nextMoveChar);
    OutputView.printMap(bridgeGame.bridgeAnswers);
  }
}

module.exports = App;
