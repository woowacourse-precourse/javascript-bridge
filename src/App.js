const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const Validator = require("./Validator");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStartMessage();
    this.buildBridge();
  }

  buildBridge() {
    InputView.readBridgeSize(this.tryValidateBridge.bind(this));
  }

  tryValidateBridge(bridgeSize) {
    try {
      Validator.validateBridgeSize(bridgeSize);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.buildBridge();
      return;
    }
    this.manageBridge(bridgeSize);
  }

  
}

module.exports = App;
