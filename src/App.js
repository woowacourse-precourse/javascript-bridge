const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const InputValidate = require("./InputValidate");

class App {
  #bridgeGame;

  play() {
    OutputView.printOpening();
    this.constructBridgeInput();
  }

  constructBridgeInput() {
    InputView.readBridgeSize(this.constructBridge.bind(this));
  }

  constructBridge(size) {
    if (!this.#tryValidate(InputValidate.checkBridgeSize, size)) {
      this.constructBridgeInput();
    }
    const bridge = BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);

    this.crossBridgeInput();
  }

  crossBridgeInput() {
    InputView.readMoving(this.crossBridge.bind(this));
  }

  crossBridge(direction) {
    if (!this.#tryValidate(InputValidate.checkMovingDirection, direction)) {
      this.crossBridgeInput();
    }
    if (this.#bridgeGame.isMovable(direction)) {
      this.#bridgeGame.move(direction);
      OutputView.printMap(this.#bridgeGame.getMap());
      if (this.#bridgeGame.isSuccess()) {
        this.showResult();
        return;
      }
      this.crossBridgeInput();
    } else {
      this.#bridgeGame.out(direction);
      OutputView.printMap(this.#bridgeGame.getMap());
      this.retryOrNotInput();
    }
  }

  retryOrNotInput() {
    InputView.readGameCommand(this.retryOrNot.bind(this));
  }

  retryOrNot(command) {
    if (!this.#tryValidate(InputValidate.checkRetryOrQuitCommand, command)) {
      this.retryOrNotInput();
    }
    if (command === "R") {
      this.#bridgeGame.retry();
      this.crossBridgeInput();
    }
    if (command === "Q") {
      this.success();
    }
  }

  showResult() {
    const [map, success, tryCount] = this.#bridgeGame.getResult();
    OutputView.printResult(map, success, tryCount);
    MissionUtils.Console.close();
  }

  #tryValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return false;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
