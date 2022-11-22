const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./domain/BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const InputValidate = require("./utils/InputValidate");

class App {
  #bridgeGame;

  play() {
    OutputView.printOpening();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      if (!this.#tryValidate(InputValidate.checkBridgeSize, size)) {
        this.requestBridgeSize();
        return;
      }
      this.setBridgeGame(size);
    });
  }

  setBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);

    this.requestMovingDirection();
  }

  requestMovingDirection() {
    InputView.readMoving((direction) => {
      if (!this.#tryValidate(InputValidate.checkMovingDirection, direction)) {
        this.requestMovingDirection();
        return;
      }
      this.moveToDirection(direction);
    });
  }

  moveToDirection(direction) {
    this.#bridgeGame.move(direction);
    OutputView.printMap(this.#bridgeGame.getMap());
    if (this.#bridgeGame.isClear()) {
      this.showResult();
      return;
    }
    this.#bridgeGame.isFallen() ? this.requsetRetryCommand() : this.requestMovingDirection();
  }

  requsetRetryCommand() {
    InputView.readGameCommand((command) => {
      if (!this.#tryValidate(InputValidate.checkRetryOrQuitCommand, command)) {
        this.requsetRetryCommand();
        return;
      }
      this.runRetryOrQuit(command);
    });
  }

  runRetryOrQuit(command) {
    if (command === "R") {
      this.#bridgeGame.retry();
      this.requestMovingDirection();
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
