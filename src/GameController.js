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
        this.#selectedPath = input;
        this.printTrace();
      } catch (e) {
        OutputView.printMessage(e);
        this.askForPath();
      }
    });
  }

  printTrace() {
    this.#bridgeGame.makeTrace(this.#selectedPath);
  }
}

module.exports = GameController;
