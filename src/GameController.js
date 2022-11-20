const BridgeGame = require("./BridgeGame");
const BridgeSizeValidation = require("./BridgeSizeValidation");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class GameController {
  #bridgeGame;

  constructor() {
    this.start();
    this.#bridgeGame = new BridgeGame();
  }

  start() {
    OutputView.startGame();
    this.askForBridgeSize();
  }

  askForBridgeSize() {
    InputView.readBridgeSize((input) => {
      try {
        new BridgeSizeValidation(input);
        const bridgeSize = Number(input);
        this.#bridgeGame.makeBridge(bridgeSize);
      } catch (e) {
        OutputView.printMessage(e);
        this.askForBridgeSize();
      }
    });
  }
}

module.exports = GameController;
