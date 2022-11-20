const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");

class Control {
  gameStart() {
    InputView.readBridgeSize();
  }
}

module.exports = Control;
