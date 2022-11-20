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

  // - 다리의 길이 입력 받는다.
  inputBrideSize() {
    InputView.readBridgeSize(this.makeWinningBridge.bind(this));
  }

  makeWinningBridge(size) {
    OutputView.printMessage('');

    try {
      this.bridgeGame.makeWinningBridge(Number(size));
    } catch (error) {
      OutputView.printMessage(error);
      return this.inputBrideSize();
    }

    this.inputMoving();
  }

  // - 위, 아래 중 이동할 칸 입력 받는다.
  inputMoving() {
    InputView.readMoving(this.move.bind(this));
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

  // - 재시작 또는 종료 여부 입력 받는다.
  inputGameCommand() {
    InputView.readGameCommand(this.checkCommand.bind(this));
  }

  checkCommand(command) {
    Validation.checkBlank(command);
    Validation.checkStringType(command);
    Validation.checkUpperCaseOfCommand(command);
    Validation.checkValidCommand(command);

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
