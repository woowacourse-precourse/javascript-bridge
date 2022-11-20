const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    OutputView.printStartMessage();

    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(bridgeSize, generate);

    new BridgeGame(bridge);
  }
}

const app = new App();
app.play();

module.exports = App;
