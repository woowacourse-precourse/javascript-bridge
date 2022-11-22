const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const Validator = require('./Validator');
const Constant = require('./Constant');
const { Console } = require('@woowacourse/mission-utils');

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
    OutputView.printMap(this.bridgeGame.getBridgeMap());
    this.askRetry();
  }

  askRetry() {
    InputView.readGameCommand(this.tryValidateRetry.bind(this));
  }

  manageRetry(command) {
    if (BridgeGame.shallWeQuit(command)) {
      this.endWithFailure();
      return;
    }
    this.bridgeGame.retry();
    this.mainRound();
  }

  managePassCase() {
    this.bridgeGame.move();
    OutputView.printMap(this.bridgeGame.getBridgeMap());
    if (this.bridgeGame.isFinish()) {
      this.endWithSuccess();
      return;
    }
    this.mainRound();
  }

  endWithFailure() {
    OutputView.printResult(this.bridgeGame.getBridgeMap(), Constant.FAIL_MESSAGE, this.bridgeGame.getNumberOfAttempts());
    Console.close();
  }

  endWithSuccess() {
    OutputView.printResult(this.bridgeGame.getBridgeMap(), Constant.SUCCESS_MESSAGE, this.bridgeGame.getNumberOfAttempts());
    Console.close();
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
