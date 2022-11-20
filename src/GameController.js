const BridgeGame = require("./BridgeGame");
const BridgeSizeValidation = require("./validation/BridgeSizeValidation");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MovingValidation = require("./validation/MovingValidation");
const { MESSAGES } = require("./constants");

class GameController {
  #bridgeGame;
  #selectedPath;

  constructor() {
    this.start();
    this.#bridgeGame = new BridgeGame();
    this.#selectedPath = [];
  }

  start() {
    OutputView.printMessage(MESSAGES.START);
    this.askForBridgeSize();
  }

  askForBridgeSize() {
    InputView.readBridgeSize((input) => {
      try {
        new BridgeSizeValidation(input);
        const bridgeSize = Number(input);
        this.#bridgeGame.makeBridge(bridgeSize);
        this.askForPath();
      } catch (e) {
        OutputView.printMessage(e);
        this.askForBridgeSize();
      }
    });
  }

  askForPath() {
    InputView.readMoving((input) => {
      try {
        new MovingValidation(input);
        this.#selectedPath.push(input);
      } catch (e) {
        OutputView.printMessage(e);
        this.askForPath();
      }
    });
  }
}

module.exports = GameController;
