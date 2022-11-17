const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  start() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  getBridgeSize(size) {}
}

module.exports = Controller;
