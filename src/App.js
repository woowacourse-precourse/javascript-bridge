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
  constructor() {
    this.BridgeGame = new BridgeGame();
    this.tryTimes = 1;
  }

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.requestBridgeSize.bind(this));
  }

  requestBridgeSize(size) {
    try {
      validateBridgeSize(size);
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(this.requestBridgeSize.bind(this));
      return;
    }

    this.BridgeGame.setBridge(makeBridge(Number(size), BridgeRandomNumberGenerator.generate));
    InputView.readMoving(this.requestMoveUpOrDown.bind(this));
  }

  requestMoveUpOrDown(answer) {
    try {
      validateMoveUpOrDownAnswer(answer);
    } catch (error) {
      Console.print(error);
      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
      return;
    }

    OutputView.printGameProgress(this.BridgeGame.getPosition(), this.BridgeGame.getBridge(), answer);
    this.gameProgress(answer);
  }

  gameProgress(answer) {
    if (this.BridgeGame.isCorrect(answer)) {
      this.BridgeGame.move();

      if (this.BridgeGame.getBridge().length === this.BridgeGame.getPosition()) return this.closeGame(answer);

      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
      return;
    }

    InputView.readGameCommand(this.handleReadGameCommand.bind(this));
  }

  handleReadGameCommand(answer) {
    try {
      validateRetryCommand(answer);
    } catch (error) {
      Console.print(error);
      return InputView.readGameCommand(this.handleReadGameCommand.bind(this));
    }

    if (answer === BRIDGE.KEYWORDS.RETRY) return this.onRetry();
    if (answer === BRIDGE.KEYWORDS.QUIT) return this.closeGame(answer);
  }

  onRetry() {
    this.tryTimes++;
    this.BridgeGame.retry();
    InputView.readMoving(this.requestMoveUpOrDown.bind(this));
  }

  closeGame(answer) {
    OutputView.printGameResult(answer, this.tryTimes);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
