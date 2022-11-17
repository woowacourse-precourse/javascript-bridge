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

  gameExit() {}
}

module.exports = GameController;
