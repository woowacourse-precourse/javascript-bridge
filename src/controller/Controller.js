const BridgeGame = require('../BridgeGame');
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
      OutputView.printError(error);
      return this.inputBrideSize();
    }

    this.makeWinningBridge(size);
  }

  makeWinningBridge(size) {
    OutputView.printMessage(LINE_BREAK);
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
      OutputView.printError(error);
      return this.inputMoving();
    }

    this.move(direction);
  }

  move(direction) {
    const [CAN_MOVE, UPPER_BRIDGE, LOWER_BRIDGE] =
      this.bridgeGame.move(direction);

    this.printMoving(CAN_MOVE, UPPER_BRIDGE, LOWER_BRIDGE);
  }

  printMoving(CAN_MOVE, UPPER_BRIDGE, LOWER_BRIDGE) {
    OutputView.printMap(UPPER_BRIDGE, LOWER_BRIDGE);

    this.checkSuccess(CAN_MOVE);
  }

  checkSuccess(CAN_MOVE) {
    if (CAN_MOVE && this.bridgeGame.isLastStage()) {
      const IS_SUCCEEDED = true;
      return this.getResult(IS_SUCCEEDED);
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
      this.getResult(IS_SUCCEEDED);
    }
  }

  retry() {
    this.bridgeGame.retry();
    this.inputMoving();
  }

  getResult(IS_SUCCEEDED) {
    const GAME_RESULT = IS_SUCCEEDED ? SUCCESS : FAIL;
    const [RETRY_COUNT, UPPER_BRIDGE, LOWER_BRIDGE] =
      this.bridgeGame.getResult();
    this.printResult(RETRY_COUNT, GAME_RESULT, UPPER_BRIDGE, LOWER_BRIDGE);
  }

  printResult(RETRY_COUNT, GAME_RESULT, UPPER_BRIDGE, LOWER_BRIDGE) {
    OutputView.printResult(
      RETRY_COUNT,
      GAME_RESULT,
      UPPER_BRIDGE,
      LOWER_BRIDGE
    );

    this.close();
  }

  close() {
    close();
  }
}

module.exports = Controller;
