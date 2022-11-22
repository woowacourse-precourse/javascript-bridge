const BridgeGame = require('../GameApi/BridgeGame');
const OutputView = require('../View/OutputView');

class BridgeController { 
  #game;

  constructor () {
    this.#game = new BridgeGame();
  }

  bridgeSize(size) {
    return this.#game.brige(size);
  }

  nowMapState(select) {
    return OutputView.printMap(this.#game.move(select));
  }

  gameState() {
    if (this.gamechlear()) {
      return OutputView.printResult(this.#game.user.userStatus, this.#game.answerOption());
    }
    return this.#game.progress;
  }

  gameRetry(select) {
    return this.#game.retry(select)
  }

  gamechlear() {
    return this.#game.answer();
  }

  gameResult() {
    return OutputView.printResult(this.#game.user.userStatus, this.#game.answerOption());
  }

}

module.exports = BridgeController;