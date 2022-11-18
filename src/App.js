const { InputView } = require('./Console');
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
    this.whileFinish(bridgeGame);
  }
  whileFinish(bridgeGame) {
    const nextMoveChar = InputView.readMoving();
    bridgeGame.move(nextMoveChar);
    return true;
  }
}

module.exports = App;
