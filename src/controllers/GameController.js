const GameService = require('../gameService');
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
    this.#gameService.movePlayer(direction);
  }

  printCurMap() {
    const curMap = this.#gameService.printCurMap();
    OutputView.printMap(curMap, false);
  }

  gameExit() {}
}

module.exports = GameController;
