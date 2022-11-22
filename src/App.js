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

  manageBridge(bridgeSize) {
    this.bridgeGame.setBridge(bridgeSize);
    this.mainRound();
  }

  mainRound() {
    InputView.readMoving(this.tryValidateMove.bind(this));
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

  tryValidateRetry(command) {
    try {
      Validator.validateRetryCommand(command);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.askRetry();
      return;
    }
    this.manageRetry(command);
  }
}

module.exports = App;
