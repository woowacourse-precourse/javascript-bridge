const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const validBridgeSize = require("./validation/validBridgeSize");
const validMoveUpOrDownAnswer = require("./validation/validMoveUpOrDownAnswer");
const { Console } = require("@woowacourse/mission-utils");

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
    validBridgeSize(size);
    this.#bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);

    InputView.readMoving(this.requestMoveUpOrDown.bind(this));
  }

  requestMoveUpOrDown(answer) {
    validMoveUpOrDownAnswer(answer);
    const position = this.BridgeGame.getPosition();

    OutputView.printMap(position, this.#bridge, answer);
    OutputView.setRecentBridgePrint(position, this.#bridge, answer);

    const isCorrect = this.BridgeGame.isCorrect(answer, this.#bridge);

    if (isCorrect) {
      this.BridgeGame.move();
      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
    }

    if (!isCorrect) {
      InputView.readGameCommand(this.handleRetry.bind(this));
    }
  }

  handleRetry(answer) {
    if (answer === "R") {
      this.tryTimes++;
      this.BridgeGame.retry();
      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
    }

    if (answer === "Q") {
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
