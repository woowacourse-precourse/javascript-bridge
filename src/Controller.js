const { printMessage, close } = require('./Utils.js');
const { GAME_RESULT, MOVE, IS_RETRY } = require('./Constants.js');
const BridgeSize = require('./Validate/BridgeSize.js');
const BridgeCommand = require('./Validate/BridgeCommand.js');
const InputView = require('./View/InputView.js');
const OutputView = require('./View/OutputView.js');
const BridgeGame = require('./BridgeGame.js');
const BridgeShape = require('./BridgeShape.js');
const Retry = require('./Validate/Retry.js');
const Counting = require('./Counting.js');

class Controller {
  constructor() {
    this.bridgeGame;
    this.safeBridgeList;
    this.originalBridgeList;
    this.bridgeShape = new BridgeShape();
    this.counting = new Counting();
  }

  InputBridgeSize() {
    InputView.readBridgeSize((size) => {
      const bridgeSize = new BridgeSize(size);
      this.bridgeGame = new BridgeGame(size);
      this.safeBridgeList = this.bridgeGame.makeBridge();
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
      this.compareCommand(command);
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.inputMoving();
    }
  }

  compareCommand(inputCommand) {
    const correctCommand = this.safeBridgeList.shift();
    const compareResult = this.bridgeGame.move(inputCommand, correctCommand);
    this.printCurrentBridge(inputCommand, compareResult);
  }

  printCurrentBridge(inputCommand, compareResult) {
    this.bridgeShape.addBridgeMap(inputCommand, compareResult);
    OutputView.printMap(this.bridgeShape.currentBridgeMap());
    this.isWrong(compareResult);
  }

  isWrong(compareResult) {
    if (compareResult === MOVE.FAIL) {
      this.safeBridgeList = JSON.parse(JSON.stringify(this.originalBridgeList));
      this.selectRetry();
    }
    if (compareResult === MOVE.PASS) {
      this.isEndGame();
    }
  }

  selectRetry() {
    InputView.readGameCommand((input) => {
      const retry = new Retry(input);
      this.checkReInputRetry(retry, input);
    });
  }

  checkReInputRetry(retry, input) {
    try {
      retry.validate();
      this.selectRegameOrQuit(input);
    } catch (errorMessage) {
      printMessage(errorMessage);
      this.selectRetry();
    }
  }

  selectRegameOrQuit(input) {
    if (input === IS_RETRY.YES) {
      this.bridgeShape.initBridgeMap();
      this.counting.addCount();
      this.inputMoving();
    }
    if (input === IS_RETRY.NO) {
      this.Quit(GAME_RESULT.FAIL);
    }
  }

  isEndGame() {
    if (!this.safeBridgeList.length) {
      this.Quit(GAME_RESULT.SUCCESS);
    }
    if (this.safeBridgeList.length) {
      this.inputMoving();
    }
  }

  Quit(gameResult) {
    OutputView.printResult(this.bridgeShape.currentBridgeMap(), `${gameResult}`, this.counting.getCount());
    close();
  }
}

module.exports = Controller;
