const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
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
      this.readMoving();
    });
  }
  makeBridge() {
    this.gameManager.bridge = BridgeMaker.makeBridge(this.gameManager.size, BridgeRandomNumberGenerator.generate);
  }
  readMoving() {
    InputView.readMoving((moving) => {
      const movingResult = this.gameManager.move(this.gameManager.bridge, this.gameManager.currentPosition, moving);
      this.gameManager.resultMap.push(this.handleResultMap(moving, movingResult));
    });
  }
  handleResultMap(moving, result) {
    return {
      moving,
      result,
    };
  }
}

module.exports = App;

const app = new App();
app.play();
