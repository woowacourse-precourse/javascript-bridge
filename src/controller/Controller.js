const BridgeGame = require('../BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { MESSAGE } = require('../utils/constants');
const Validation = require('../utils/Validation');
const { close } = require('../utils/utils');

class Controller {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  gameStart() {
    OutputView.printMessage(MESSAGE.startGame);

    this.inputBrideSize();
  }

  inputBrideSize() {
    InputView.readBridgeSize(this.validateSize.bind(this));
  }

  validateSize(size) {
    try {
      this.bridgeGame.validateSize(Number(size));
    } catch (error) {
      OutputView.printMessage(error);
      return this.inputBrideSize();
    }

    this.makeWinningBridge(size);
  }

  makeWinningBridge(size) {
    OutputView.printMessage('');
    this.bridgeGame.makeWinningBridge(Number(size));

    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this.validateDirection.bind(this));
  }

  validateDirection(direction) {
    try {
      this.bridgeGame.validateDirection(direction);
    } catch (error) {
      OutputView.printMessage(error);
      return this.inputMoving();
    }

    this.move(direction);
  }

  move(direction) {
    const [canMove, upperBridge, lowerBridge] = this.bridgeGame.move(direction);

    this.printMoving(canMove, upperBridge, lowerBridge);
  }

  printMoving(canMove, upperBridge, lowerBridge) {
    OutputView.printMap(upperBridge, lowerBridge);

    this.checkSuccess(canMove);
  }

  checkSuccess(canMove) {
    if (canMove && this.bridgeGame.isLastStage()) {
      const isSucceeded = true;
      return this.getResult(isSucceeded);
    }

    if (canMove) return this.inputMoving();
    if (!canMove) return this.inputGameCommand();
  }

  inputGameCommand() {
    InputView.readGameCommand(this.validateCommand.bind(this));
  }

  validateCommand(command) {
    try {
      this.bridgeGame.validateCommand(command);
    } catch (error) {
      OutputView.printMessage(error);
      return this.inputGameCommand();
    }

    this.executeCommand(command);
  }

  executeCommand(command) {
    if (command === 'R') this.retry();
    if (command === 'Q') {
      const isSucceeded = false;
      this.getResult(isSucceeded);
    }
  }

  retry() {
    this.bridgeGame.retry();
    this.inputMoving();
  }

  getResult(isSucceeded) {
    const GAME_RESULT = isSucceeded ? '성공' : '실패';
    const [tryingCount, upperBridge, lowerBridge] = this.bridgeGame.getResult();
    this.printResult(tryingCount, GAME_RESULT, upperBridge, lowerBridge);
  }

  printResult(tryingCount, GAME_RESULT, upperBridge, lowerBridge) {
    OutputView.printResult(tryingCount, GAME_RESULT, upperBridge, lowerBridge);

    this.close();
  }

  close() {
    close();
  }
}

module.exports = Controller;
