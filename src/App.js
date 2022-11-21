const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateReadBridgeSize } = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.onReadBridgeSize);
  }

  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = BridgeMaker.makeBridge(size, generate);
    console.log(bridge);
  }
}

const app = new App();
app.play();
module.exports = App;
