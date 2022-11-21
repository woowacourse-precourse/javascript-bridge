const OutputView = require("./OutputView");
const InputView = require("./InputView");

class BridgeGameToView {
  BridgeGameToOutputView(gameRec) {
    OutputView.printMap(gameRec);
  }

  BridgeGameToInputView(gameRec) {
    InputView.readMoving(gameRec);
  }
}

module.exports = BridgeGameToView;
