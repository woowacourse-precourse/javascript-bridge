const BridgeGame = require('../model/BridgeGame');
const WinningBridge = require('../model/WinningBridge');
const CurrBridge = require('../model/CurrBridge');
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
    this.currBridge = new CurrBridge();
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
      this.winningBridge.validate(Number(size));
    } catch (error) {
      OutputView.printError(error);
      return this.inputBrideSize();
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
      this.currBridge.validate(direction);
    } catch (error) {
      OutputView.printError(error);
      return this.inputMoving();
    }

    this.move(direction);
  }

  move(direction) {
    const CAN_MOVE = this.currBridge.canMove(direction, this.winningBridge);
    this.bridgeGame.move(this.currBridge, direction, CAN_MOVE);
    OutputView.printMap(this.currBridge);

    this.checkSuccess(CAN_MOVE);
  }

  checkSuccess(CAN_MOVE) {
    if (CAN_MOVE && this.currBridge.isLast(this.winningBridge)) {
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
      this.bridgeGame.validateCommand(command);
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
    this.bridgeGame.retry(this.currBridge);
    this.inputMoving();
  }

  printResult(IS_SUCCEEDED) {
    const GAME_RESULT = IS_SUCCEEDED ? SUCCESS : FAIL;
    OutputView.printResult(GAME_RESULT, this.bridgeGame, this.currBridge);

    this.close();
  }

  close() {
    close();
  }
}

module.exports = Controller;
