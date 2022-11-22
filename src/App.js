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

  askRetry() {
    InputView.readGameCommand(this.tryValidateRetry.bind(this));
  }

  manageRetry(command) {
    if (this.bridgeGame.shallWeQuit(command)) {
      this.bridgeGame.endWithFailure();
      return;
    }
    this.bridgeGame.retry();
    this.mainRound();
  }

  managePassCase() {
    this.bridgeGame.move();
    OutputView.printMap(this.bridgeGame.getBridgeMap());
    if (this.bridgeGame.isFinish()) {
      this.bridgeGame.endWithSuccess();
      return;
    }
    this.mainRound();
  }

}

module.exports = App;
