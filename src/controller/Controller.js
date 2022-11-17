const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const validator = require('../utils/validator');

class Controller {
  start() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  getBridgeSize(size) {
    if (!validator.checkBridgeSizeInput(size))
      throw new Error('[ERROR] 입력한 다리 길이가 올바르지 않습니다.');
  }
}

module.exports = Controller;
