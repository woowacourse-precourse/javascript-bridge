const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    this.start();
    this.readBridgeSize();
  }
  start() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  }
  readBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.gameManager.size = +size;
      this.makeBridge();
    });
  }
  makeBridge() {
    this.gameManager.bridge = BridgeMaker.makeBridge(this.gameManager.size, BridgeRandomNumberGenerator.generate);
  }
}

module.exports = App;

const app = new App();
app.play();
