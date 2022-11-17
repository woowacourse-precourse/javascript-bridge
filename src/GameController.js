const InputView = require("./InputView");
const OutputView = require("./OutputView");

class GameController {
  
  start() {
    OutputView.printStart();
    InputView.readBridgeSize();

  }
}

module.exports = GameController;
