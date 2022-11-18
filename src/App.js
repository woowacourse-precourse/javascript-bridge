const BridgeGame = require("./BridgeGame");
const Bridge = require("./Bridge");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #bridge;
  bridgeGame = new BridgeGame();

  play() {
    this.startBridgeMaking();
  }

  startBridgeMaking() {
    OutputView.printStart();
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    this.#bridge = new Bridge(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
    console.log(this.#bridge);
    this.InputPositionUntilBridgeEnds();
  }

  InputPositionUntilBridgeEnds() {
    InputView.readMoving(this.judgeIsNextDirectionCorrect.bind(this));
  }

  judgeIsNextDirectionCorrect(input) {
    const isNextDirectionCorrect = this.bridgeGame.move(
      this.#bridge.getCorrectDirection(),
      input
    );

    if (isNextDirectionCorrect) return this.movePosition();
    return this.stopMoving();
  }

  movePosition() {
    this.#bridge.moveCurrentPosition();

    if (this.#bridge.getIsLastPosition()) {
      OutputView.printMap(this.#bridge.getCrossState("success"));
      return OutputView.printResult(
        this.#bridge.getCrossState("success"),
        "성공",
        this.bridgeGame.totalTrial
      );
    }

    OutputView.printMap(this.#bridge.getCrossState("success"));
    return this.InputPositionUntilBridgeEnds();
  }

  stopMoving() {
    OutputView.printMap(this.#bridge.getCrossState("failed"));
    InputView.readGameCommand(this.judgeIsUserWantRestart.bind(this));
  }

  judgeIsUserWantRestart(input) {
    if (input === "R") {
      this.bridgeGame.retry(
        this.#bridge.resetCurrentPosition.bind(this.#bridge)
      );
      return this.InputPositionUntilBridgeEnds();
    }
    if (input === "Q") {
      OutputView.printResult(
        this.#bridge.getCrossState("failed"),
        "실패",
        this.bridgeGame.totalTrial
      );
      Console.close();
    }
  }
}

module.exports = App;
new App().play();
