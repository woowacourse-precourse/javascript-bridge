const { InputView } = require('./Console');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    const bridgeSize = InputView.readBridgeSize();
    BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }
}

module.exports = App;
