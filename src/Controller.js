const { printMessage } = require('./Utils/ConsoleUtils.js');
const { isRetry, isQuit } = require('./Utils/CommandUtils.js');
const BridgeSize = require('./Validate/BridgeSize.js');
const BridgeDirection = require('./Validate/BridgeDirection.js');
const InputView = require('./View/InputView.js');
const OutputView = require('./View/OutputView.js');
const BridgeGame = require('./BridgeGame.js');
const BridgeCommand = require('./Validate/BridgeCommand.js');
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
      printMessage('');
      this.inputMoving();
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.InputBridgeSize();
    }
  }

  inputMoving() {
    InputView.readMoving((command) => {
      const bridgeDirection = new BridgeDirection(command);
      this.checkReInputMoving(bridgeDirection, command);
    });
  }

  checkReInputMoving(bridgeDirection, command) {
    try {
      bridgeDirection.validate();
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
      printMessage('');
      this.inputMoving();
    }
  }

  printResult() {
    const result = this.bridgeGame.gameResult();
    OutputView.printResult(...result);
  }

  inputRetryQuit() {
    InputView.readGameCommand((command) => {
      const bridgeCommand = new BridgeCommand(command);
      this.safeBridgeList = JSON.parse(JSON.stringify(this.originalBridgeList));
      this.checkInputRetryQuit(bridgeCommand, command);
    });
  }

  checkInputRetryQuit(bridgeCommand, command) {
    try {
      bridgeCommand.validate();
      this.judgeRetryQuit(command);
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.inputRetryQuit();
    }
  }

  judgeRetryQuit(command) {
    if (isRetry(command)) {
      this.bridgeGame.retry();
      this.inputMoving();
    }
    if (isQuit(command)) {
      this.printResult();
    }
  }
}

module.exports = Controller;
