const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStart();
    this.initBridge();
  }

  initBridge() {
    InputView.readBridgeSize((length) => {
      if (!InputView.validate(length)) {
        return this.initBridge();
      }

      const bridge = BridgeMaker.makeBridge(parseInt(length, 10), generate);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
