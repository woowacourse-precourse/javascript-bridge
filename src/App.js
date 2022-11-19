const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const validBridgeSize = require("./validation/validBridgeSize");
const validMoveUpOrDownAnswer = require("./validation/validMoveUpOrDownAnswer");

class App {
  #bridge;

  constructor() {
    this.BridgeGame = new BridgeGame();
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
    OutputView.printMap(this.BridgeGame.getPosition(), this.#bridge, answer);

    const isCorrect = this.BridgeGame.isCorrect(answer, this.#bridge);

    if (isCorrect) {
      this.BridgeGame.move();
      InputView.readMoving(this.requestMoveUpOrDown.bind(this));
    }
  }
}

const app = new App();
app.play();

module.exports = App;
