const BridgeGame = require('../model/BridgeGame');
const WinningBridge = require('../model/WinningBridge');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const {
  MESSAGE,
  LINE_BREAK,
  RETRY,
  QUIT,
  SUCCESS,
  FAIL,
} = require('../utils/constants');
const { close } = require('../utils/utils');

class Controller {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.winningBridge = new WinningBridge();
  }

  gameStart() {
    OutputView.printMessage(MESSAGE.startGame);

    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.validateSize.bind(this));
  }

  validateSize(size) {
    try {
      WinningBridge.validate(size);
    } catch (error) {
      OutputView.printError(error);
      return this.inputBridgeSize();
    }

    this.makeWinningBridge(size);
  }

  makeWinningBridge(size) {
    OutputView.printMessage(LINE_BREAK);
    this.winningBridge.makeBridge(Number(size));

    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this.validateDirection.bind(this));
  }

  validateDirection(direction) {
    try {
      BridgeGame.validateDirection(direction);
    } catch (error) {
      OutputView.printError(error);
      return this.inputMoving();
    }

    this.move(direction);
  }

  move(direction) {
    const CAN_MOVE = this.bridgeGame.canMove(direction, this.winningBridge);
    this.bridgeGame.move(direction, CAN_MOVE);
    OutputView.printMap(this.bridgeGame);

    this.checkSuccess(CAN_MOVE, this.isLastStage());
  }

  isLastStage() {
    return this.bridgeGame.isLastStage(this.winningBridge);
  }

  checkSuccess(CAN_MOVE, isLastStage) {
    if (CAN_MOVE && isLastStage) {
      const IS_SUCCEEDED = true;
      return this.printResult(IS_SUCCEEDED);
    }

    if (CAN_MOVE) return this.inputMoving();
    if (!CAN_MOVE) return this.inputGameCommand();
  }

  inputGameCommand() {
    InputView.readGameCommand(this.validateCommand.bind(this));
  }

  validateCommand(command) {
    try {
      BridgeGame.validateCommand(command);
    } catch (error) {
      OutputView.printError(error);
      return this.inputGameCommand();
    }

    this.executeCommand(command);
  }

  executeCommand(command) {
    if (command === RETRY) this.retry();
    if (command === QUIT) {
      const IS_SUCCEEDED = false;
      this.printResult(IS_SUCCEEDED);
    }
  }

  retry() {
    this.bridgeGame.retry();

    this.inputMoving();
  }

  printResult(IS_SUCCEEDED) {
    const GAME_RESULT = IS_SUCCEEDED ? SUCCESS : FAIL;
    OutputView.printResult(GAME_RESULT, this.bridgeGame);

    this.close();
  }

  close() {
    close();
  }
}

module.exports = Controller;
