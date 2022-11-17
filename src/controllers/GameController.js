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
      this.printCurMap();
      isRightChoice ? this.isDone() : this.nextStep();
    };
    InputView.readMoving(moveCallback);
  }

  askRetry() {}

  gameExit() {}
}

module.exports = GameController;
