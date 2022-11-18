const BridgeGame = require("./BridgeGame");
const Bridge = require("./Bridge");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

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
    InputView.readMoving(this.movePosition.bind(this));
  }

  movePosition(input) {
    const isCorrectDirection = this.bridgeGame.move(
      this.#bridge.getCorrectDirection(),
      input
    );
    if (isCorrectDirection) {
      this.#bridge.moveCurrentPosition();
      if (this.#bridge.getIsLastPosition()) {
        OutputView.printMap(this.#bridge.getCrossState(), true);
        console.log("다리 건너기 완료\n");
        return 0;
      }
      OutputView.printMap(this.#bridge.getCrossState(), true);
      return this.InputPositionUntilBridgeEnds();
    }
    console.log("다리 건너기 실패\n");
    return 0;
  }
}

module.exports = App;
new App().play();
