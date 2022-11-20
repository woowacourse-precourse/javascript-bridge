const MissionUtils = require("@woowacourse/mission-utils");
const Bridge = require("./Bridge");
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
    this.bridgeMakeInput();
  }

  bridgeMakeInput() {
    InputView.readBridgeSize(this.bridgeMake.bind(this));
  }

  bridgeMake(size) {
    try {
      InputValidate.checkBridgeSize(size);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.bridgeMakeInput();
    }

    const bridge = new Bridge(BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate));
    this.#bridgeGame = new BridgeGame(bridge);

    this.moveInput();
  }

  moveInput() {
    InputView.readMoving(this.move.bind(this));
  }

  move(direction) {
    try {
      InputValidate.checkMovingDirection(direction);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.moveInput();
    }

    if (this.#bridgeGame.move(direction)) {
      OutputView.printMap(this.#bridgeGame.getMap());
      if (this.#bridgeGame.isSuccess()) {
        this.success(direction);
        return;
      }
      this.moveInput();
    } else {
      OutputView.printMap(this.#bridgeGame.getFailMap(direction));
      this.retryOrNotInput();
    }
  }

  retryOrNotInput() {
    InputView.readGameCommand(this.retryOrNot.bind(this));
  }

  retryOrNot(command) {
    try {
      InputValidate.checkRetryOrQuitCommand(command);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.retryOrNotInput();
    }
    if (command === "R") {
      this.#bridgeGame.retry();
      this.moveInput();
    }
    if (command === "Q") {
      this.success();
    }
  }

  fail(direction) {
    const [map, tryCount] = this.#bridgeGame.getFailResult(direction);
    OutputView.printResult(this.#bridgeGame.isSuccess(), map, tryCount);
    MissionUtils.Console.close();
  }

  success() {
    const [map, tryCount] = this.#bridgeGame.getResult();
    OutputView.printResult(this.#bridgeGame.isSuccess(), map, tryCount);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
