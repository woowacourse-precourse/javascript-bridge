const InputView = require('./Viewer/InputView');
const OutputView = require('./Viewer/OutputView');

class BridgeGameController {
  constructor() {
    this.init();
  }
  init() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = BridgeGameController;
