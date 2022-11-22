const OutputView = require("./OutputView");
const InputView = require("./InputView");

class BridgeGameToView {
  bridgeGameToOutputView(gameRec) {
    OutputView.printMap(gameRec);
  }

  bridgeGameToInputView(gameRec) {
    InputView.readMoving(gameRec);
  }
}

module.exports = BridgeGameToView;
