const InputView = require("./InputView");
const OutputView = require("./OutputView");

class GameController {
  #bridgeGame;
  #bridgeSize;

  constructor() {
    this.start();
  }

  start() {
    OutputView.startGame();
    const bridgeSize = InputView.readBridgeSize();
  }

  moving() {
    const movement = InputView.readMoving();
    this.#bridgeGame.saveMovement(movement);
  }
}

module.exports = GameController;
