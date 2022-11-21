const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class BridgeGameController {
  game() {
    InputView.readBridgeSize();
  }
}

module.exports = BridgeGameController;
