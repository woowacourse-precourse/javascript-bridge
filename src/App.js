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
      if (bridgeGame.move()) OutputView.printMap(this.currentBridge, "O");
      if (!bridgeGame.move()) {
        OutputView.printMap(this.currentBridge, "X");
        if (InputView.readGameCommand() === "R") {
          this.currentBridge = [];
          this.moveBridge();
        }
        if (InputView.readGameCommand() === "Q") return;
      }
    }
  }

  play() {
    Console.print("다리 건너기 게임을 시작합니다.");
    this.bridge = InputView.readBridgeSize();
    this.moveBridge();
    
  }
}

module.exports = App;
