const BridgeGame = require("./BridgeGame");
const BridgeSizeValidation = require("./validation/BridgeSizeValidation");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MovingValidation = require("./validation/MovingValidation");
const { MESSAGES } = require("./constants");
const TraceController = require("./utils/TraceController");

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
        this.#bridgeGame.saveBridge(bridgeSize);
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
    const trace = this.#bridgeGame.move(this.#selectedPath);
    TraceController.printTrace(trace);
    this.stirUp();
  }

  stirUp() {
    const isFailed = this.#bridgeGame.checkFailure();
    if (isFailed) this.#bridgeGame.retry();
    const isOvered = this.#bridgeGame.checkOvered();
    if (isOvered) this.printEnding();
  }
}

module.exports = GameController;
