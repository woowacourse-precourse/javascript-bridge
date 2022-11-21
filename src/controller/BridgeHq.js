const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

const { ERROR, BRIDGE } = require('../util/Message');

class BridgeHq {
  startGame() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.validBridgeSize.bind(this));
  }

  validBridgeSize(size) {
    if (size >= BRIDGE.MIN_LENGTH && size <= BRIDGE.MAX_LENGTH) {
      return;
    }
    OutputView.printError(ERROR.LENGTH);
    this.getBridgeSize();
  }
}
module.exports = BridgeHq;
