const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

const { ERROR } = require('../util/Message');
const { checkInteger, checkRange } = require('../util/Validation');

class BridgeHq {
  startGame() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.validBridgeSize.bind(this));
  }

  validBridgeSize(size) {
    if (checkInteger(size) && checkRange(size)) {
      return;
    }
    OutputView.printError(ERROR.LENGTH);
    this.getBridgeSize();
  }
}
module.exports = BridgeHq;
