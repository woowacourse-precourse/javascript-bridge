const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
const validateBridgeSize = require("./validation/validateBridgeSize");
const validateMoveUpOrDownAnswer = require("./validation/validateMoveUpOrDownAnswer");
const validateRetryCommand = require("./validation/validateRetryCommand");
const BRIDGE = require("./constant/constants");

class App {
  #bridge;

  constructor() {
    this.BridgeGame = new BridgeGame();
    this.tryTimes = 1;
  }

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.requestBridgeSize.bind(this));
  }

  requestBridgeSize(size) {
    size = Number(size);

    try {
      validateBridgeSize(size);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(this.requestBridgeSize.bind(this));
      return;
    }

    this.#bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);
    InputView.readMoving(this.requestMoveUpOrDown.bind(this));
  }

  requestMoveUpOrDown(answer) {
    try {
      validateMoveUpOrDownAnswer(answer);
    } catch (error) {
      Console.print(error);
      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
    }

    const position = this.BridgeGame.getPosition();

    OutputView.printMap(position, this.#bridge, answer);
    OutputView.setRecentBridgePrint(position, this.#bridge, answer);

    const isCorrect = this.BridgeGame.isCorrect(answer, this.#bridge);

    if (isCorrect) {
      this.BridgeGame.move();

      if (this.#bridge.length === this.BridgeGame.getPosition()) {
        OutputView.printGameResult(answer, this.tryTimes);
        this.shutDown();
        return;
      }

      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
    }

    if (!isCorrect) {
      InputView.readGameCommand(this.handleRetry.bind(this));
    }
  }

  handleRetry(answer) {
    try {
      validateRetryCommand(answer);
    } catch (error) {
      Console.print(error);
      InputView.readGameCommand(this.handleRetry.bind(this));
    }

    if (answer === BRIDGE.KEYWORDS.RETRY) {
      this.tryTimes++;
      this.BridgeGame.retry();
      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
    }

    if (answer === BRIDGE.KEYWORDS.QUIT) {
      OutputView.printGameResult(answer, this.tryTimes);
      this.shutDown();
    }
  }

  shutDown() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
