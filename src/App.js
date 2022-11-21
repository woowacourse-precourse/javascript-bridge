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
    InputView.readBridgeSize((size) => {
      if (!this.#tryValidate(InputValidate.checkBridgeSize, size)) {
        this.constructBridgeInput();
        return;
      }
      this.constructBridge(size);
    });
  }

  constructBridge(size) {
    const bridge = BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);

    this.crossBridgeInput();
  }

  crossBridgeInput() {
    InputView.readMoving((direction) => {
      if (!this.#tryValidate(InputValidate.checkMovingDirection, direction)) {
        this.crossBridgeInput();
        return;
      }
      this.crossBridge(direction);
    });
  }

  crossBridge(direction) {
    const moveResult = this.#bridgeGame.move(direction);
    OutputView.printMap(this.#bridgeGame.getMap());
    if (this.#bridgeGame.isClear()) {
      this.showResult();
      return;
    }
    moveResult ? this.crossBridgeInput() : this.retryOrNotInput();
  }

  retryOrNotInput() {
    InputView.readGameCommand((command) => {
      if (!this.#tryValidate(InputValidate.checkRetryOrQuitCommand, command)) {
        this.retryOrNotInput();
        return;
      }
      this.retryOrNot(command);
    });
  }

  retryOrNot(command) {
    if (command === "R") {
      this.#bridgeGame.retry();
      this.crossBridgeInput();
    }
    if (command === "Q") {
      this.showResult();
    }
  }

  showResult() {
    const [map, isClear, tryCount] = this.#bridgeGame.getResult();
    OutputView.printResult(map, isClear, tryCount);
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
