const { Console } = require("@woowacourse/mission-utils");
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
    });
  }
}

module.exports = App;

const app = new App();
app.play();
