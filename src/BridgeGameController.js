const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class BridgeGameController {
  start(game) {
    OutputView.printStart();
    InputView.game = game;
    InputView.readBridgeSize();
  }

  outputError(e) {
    OutputView.printError(e);
  }

  inputBridgeSize() {
    InputView.readBridgeSize();
  }

  inputDirection() {
    InputView.readMoving();
  }

  inputRetry() {
    InputView.readGameCommand();
  }
}

module.exports = BridgeGameController;
