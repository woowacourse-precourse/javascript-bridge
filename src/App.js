const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./model/BridgeGame');

class App {
  play() {
    OutputView.printStart();
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

module.exports = App;