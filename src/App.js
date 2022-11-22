const BridgeGame = require("./objects/BridgeGame");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./views/OutputView");
const InputView = require("./views/InputView");
const { makeBridge } = require("./BridgeMaker");

class App {
  #bridgeGame;
  play() {
    OutputView.printMessage("다리 건너기 게임을 시작합니다.\n");
    this.requestSize();
  }
  requestSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }
  createBridge(size) {
    const bridge = makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );
    console.log(bridge);
    this.#bridgeGame = new BridgeGame(bridge);
    OutputView.lineBreak();
    this.requestMove();
  }
  requestMove() {
    InputView.readMoving(this.moveUser.bind(this));
  }
  moveUser(direction) {
    if (this.#bridgeGame.isCorrectDirection(direction)) {
      this.#bridgeGame.move(direction);
      OutputView.printMap(this.#bridgeGame.mapBridge());
      //   if (this.#userBridge.length === bridge.length) {
      //     this.winGame(true);
      //     return;
      //   }
      this.requestMove();
      return;
      // }
      // this.#userBridge.push(direction);
      // OutputView.printMap(this.mapErrorBridge(this.#userBridge));
    }
    // this.requestRetry();
  }
}
const app = new App();
app.play();

module.exports = App;
