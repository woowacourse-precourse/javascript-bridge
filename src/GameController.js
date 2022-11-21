const BridgeGame = require("./BridgeGame");
const BridgeSizeValidation = require("./validation/BridgeSizeValidation");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MovingValidation = require("./validation/MovingValidation");
const { MESSAGES } = require("./constants");
const TraceController = require("./utils/TraceController");
const RetryValidation = require("./validation/RetryValidation");

class GameController {
  #bridgeGame;
  #selectedPath;

  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.start();
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
        OutputView.printMessage("");
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
    const isOvered = this.#bridgeGame.checkOvered();
    if (isFailed) this.askRetry();
    else if (!isOvered && !isFailed) this.askForPath();
    if (isOvered && !isFailed) this.printEnding();
  }

  askRetry() {
    InputView.readGameCommand((input) => {
      try {
        new RetryValidation(input);
        this.stirUpRetry(input);
      } catch (e) {
        OutputView.printMessage(e);
        this.askRetry();
      }
    });
  }

  stirUpRetry(command) {
    if (this.#bridgeGame.checkRetry(command)) {
      this.#selectedPath;
      this.#bridgeGame.retry();
      this.askForPath();
    } else if (!this.#bridgeGame.checkRetry(command)) this.printEnding();
  }

  printEnding() {
    OutputView.printMessage(MESSAGES.RESULT);
    const result = this.#bridgeGame.getResult();
    const [isFailed, tryCount, trace] = result;
    TraceController.printTrace(trace);
    OutputView.printResult(isFailed, tryCount);
  }
}

module.exports = GameController;
