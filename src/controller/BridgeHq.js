const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
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
      return this.makeBridge(size);
    }
    OutputView.printError(ERROR.LENGTH);
    this.getBridgeSize();
  }

  makeBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator);
    console.log(bridge);
  }
}
module.exports = BridgeHq;
