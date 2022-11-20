const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
    BridgeMaker.makeBridge(
      InputView.readBridgeSize(),
      BridgeRandomNumberGenerator.generate
    );
  }
}

const app = new App();
app.play();

module.exports = App;
