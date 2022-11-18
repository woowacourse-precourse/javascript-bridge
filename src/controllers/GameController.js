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
        this.tryMakeBridge(size);
      } catch (error) {
        this.catchHandler(error, this.askBridgeSize);
      }
    };
    InputView.readBridgeSize(sizeCallback);
  }

  isDone() {
    const isCompleted = this.#gameService.checkGameComplete();
    isCompleted ? this.#gameService.printGameResult() : this.askDirection();
  }

  askDirection() {
    const directionCallback = (direction) => {
      try {
        this.tryMovePlayer(direction);
      } catch (error) {
        this.catchHandler(error, this.askDirection);
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
    this.askDirection();
  }

  gameOver() {
    this.#gameService.printGameResult();
  }

  tryMakeBridge(size) {
    this.#gameService.makeBridge(size);
    this.askDirection();
  }

  tryMovePlayer(direction) {
    const isRightChoice = this.#gameService.movePlayer(direction);
    this.#gameService.printCurMap();
    isRightChoice ? this.isDone() : this.askRetry();
  }

  tryRetry(command) {
    const shouldRetry = this.#gameService.checkCommend(command);
    shouldRetry ? this.retry() : this.gameOver();
  }

  catchHandler(error, reInput) {
    OutputView.printMessage(error);
    reInput();
  }
}

module.exports = GameController;
