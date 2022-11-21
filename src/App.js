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
      if (!InputView.sizeValidate(length)) {
        return this.initBridge();
      }

      this.#bridge = BridgeMaker.makeBridge(parseInt(length, 10), generate);
      this.movingBridge();
    });
  }
  movingBridge() {
    InputView.readMoving((moving) => {
      if (!InputView.moveValidate(moving)) return this.movingBridge();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
