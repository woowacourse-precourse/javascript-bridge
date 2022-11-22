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

  manageBridge(bridgeSize) {
    this.bridgeGame.setBridge(bridgeSize);
    this.mainRound();
  }

  mainRound() {
    InputView.readMoving(this.tryValidateMove.bind(this));
  }

  tryValidateMove(direction) {
    try {
      Validator.validateDirection(direction);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.mainRound();
      return;
    }
    this.manageMove(direction);
  }

  manageMove(direction) {
    if (this.bridgeGame.isMoveFail(direction)) {
      this.manageFailCase();
      return;
    }
    this.managePassCase();
  }

  manageFailCase() {
    this.bridgeGame.fail();
    this.askRetry();
  }

}

module.exports = App;
