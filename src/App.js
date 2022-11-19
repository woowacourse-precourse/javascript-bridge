const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.bridge = [];
    this.currentBridge = [];
  }

  moveBridge() {
    while(this.bridge.length > this.currentBridge.length) {
      this.currentBridge.push(InputView.readMoving());
      let bridgeGame = new BridgeGame(this.bridge, this.currentBridge);
      if (bridgeGame.move()) OutputView.printMap(this.currentBridge, "correct");
      if (!bridgeGame.move()) {
        OutputView.printMap(this.currentBridge, "wrong");
        let isRetry = InputView.readGameCommand();
        if (isRetry === "R") {
          let reTryBridgeGame = new BridgeGame(this.bridge, []);
          reTryBridgeGame.retry();
        }
        if (isRetry === "Q") {
          OutputView.printResult(this.currentBridge, "wrong");
        };
      }
    }
    OutputView.printResult(this.currentBridge, "correct");
  }

  play() {
    Console.print("다리 건너기 게임을 시작합니다.");
    this.bridge = InputView.readBridgeSize();
    this.moveBridge();

  }
}

module.exports = App;
