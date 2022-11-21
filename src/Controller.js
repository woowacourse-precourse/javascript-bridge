const { printMessage, close, isRetry, isQuit } = require('./Utils/Utils.js');
const BridgeSize = require('./Validate/BridgeSize.js');
const BridgeCommand = require('./Validate/BridgeCommand.js');
const InputView = require('./View/InputView.js');
const OutputView = require('./View/OutputView.js');
const BridgeGame = require('./BridgeGame.js');
const Retry = require('./Validate/Retry.js');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator.js');

class Controller {
  constructor() {
    this.bridgeGame;
    this.safeBridgeList;
    this.originalBridgeList;
  }

  InputBridgeSize() {
    InputView.readBridgeSize((size) => {
      const bridgeSize = new BridgeSize(size);
      this.bridgeGame = new BridgeGame(size);
      this.safeBridgeList = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      this.originalBridgeList = JSON.parse(JSON.stringify(this.safeBridgeList));
      this.checkReInputSize(bridgeSize);
    });
  }

  checkReInputSize(bridgeSize) {
    try {
      bridgeSize.validate();
      this.inputMoving();
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.InputBridgeSize();
    }
  }

  inputMoving() {
    InputView.readMoving((command) => {
      const bridgeCommand = new BridgeCommand(command);
      this.checkReInputMoving(bridgeCommand, command);
    });
  }

  checkReInputMoving(bridgeCommand, command) {
    try {
      bridgeCommand.validate();
      this.printCurrentBridge(command);
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.inputMoving();
    }
  }

  printCurrentBridge(inputCommand) {
    const correctCommand = this.safeBridgeList.shift();
    this.bridgeGame.move(inputCommand, correctCommand);
    OutputView.printMap(this.bridgeGame.currentBridgeMap());
    this.judgePassFail();
  }

  judgePassFail() {
    if (this.bridgeGame.isPass()) {
      this.judgeLastInput();
    }
    if (this.bridgeGame.isFail()) {
      this.inputRetryQuit();
    }
  }

  judgeLastInput() {
    if (!this.safeBridgeList.length) {
      printMessage('');
      this.printResult();
    }
    if (this.safeBridgeList.length) {
      this.inputMoving();
    }
  }

  printResult() {
    const result = this.bridgeGame.gameResult();
    OutputView.printResult(...result);
    close();
  }

  inputRetryQuit() {
    InputView.readGameCommand((input) => {
      const retry = new Retry(input);
      this.safeBridgeList = JSON.parse(JSON.stringify(this.originalBridgeList));
      this.checkInputRetryQuit(retry, input);
    });
  }

  checkInputRetryQuit(retry, input) {
    try {
      retry.validate();
      this.judgeRetryQuit(input);
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.inputRetryQuit();
    }
  }

  judgeRetryQuit(input) {
    if (isRetry(input)) {
      this.bridgeGame.retry();
      this.inputMoving();
    }
    if (isQuit(input)) {
      this.printResult();
    }
  }
}

module.exports = Controller;
