const GameService = require('../gameService');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const { MESSAGE } = require('../constant');

class GameController {
  #gameService;

  constructor() {
    this.#gameService = new GameService();
  }

  gameStart() {
    OutputView.printMessage(MESSAGE.START_NOTIFICATION);
    this.askBridgeSize();
  }

  askBridgeSize() {
    const sizeCallback = (size) => {
      try {
        this.tryBridgeSize(size);
      } catch (error) {
        this.catchHandler(error, this.askBridgeSize);
      }
    };
    InputView.readBridgeSize(sizeCallback);
  }

  movePlayer(direction) {
    return this.#gameService.movePlayer(direction);
  }

  printCurMap() {
    const curMap = this.#gameService.printCurMap();
    OutputView.printMap(curMap, false);
  }

  isDone() {
    const isCompleted = this.#gameService.checkGameComplete();
    isCompleted ? this.#gameService.printGameResult() : this.nextStep();
  }

  askDirection() {
    const directionCallback = (direction) => {
      try {
        this.tryNextStep(direction);
      } catch (error) {
        this.catchHandler(error, this.nextStep);
      }
    };
    InputView.readMoving(directionCallback);
  }

  askRetry() {
    const commandCallback = (command) => {
      try {
        this.tryRetry(command);
      } catch (error) {
        this.catchHandler(error, this.askRetry);
      }
    };
    InputView.readGameCommand(commandCallback);
  }

  retry() {
    this.#gameService.initData();
    this.nextStep();
  }

  gameOver() {
    this.#gameService.printGameResult();
  }

  tryBridgeSize(size) {
    this.#gameService.makeBridge(size);
    this.nextStep();
  }

  askDirection(direction) {
    const isRightChoice = this.movePlayer(direction);
    this.printCurMap();
    isRightChoice ? this.isDone() : this.askRetry();
  }

  tryRetry() {
    const shouldRetry = this.#gameService.checkCommend(command);
    shouldRetry ? this.retry() : this.gameOver();
  }

  catchHandler(error, reInput) {
    OutputView.printMessage(error);
    reInput();
  }
}

module.exports = GameController;
