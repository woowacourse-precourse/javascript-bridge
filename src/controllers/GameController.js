const GameService = require('../gameService');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class GameController {
  #gameService;

  constructor() {
    this.#gameService = new GameService();
  }

  gameStart() {
    OutputView.printStartMessage();
  }

  makeBridge(size) {
    this.#gameService.makeBridge(size);
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

  nextStep() {
    const moveCallback = (direction) => {
      const isRightChoice = this.movePlayer(direction);
      console.log(isRightChoice);
      this.printCurMap();
      isRightChoice ? this.isDone() : this.askRetry();
    };
    InputView.readMoving(moveCallback);
  }

  askRetry() {
    const callback = (decision) => {
      const shouldRetry = this.#gameService.checkRetry(decision);
      if (shouldRetry) {
        this.#gameService.retry();
        this.nextStep();
      } else this.#gameService.printGameResult();
    };
    InputView.readGameCommand(callback);
  }

  gameExit() {}
}

module.exports = GameController;
