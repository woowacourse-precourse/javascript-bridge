const { Console } = require("@woowacourse/mission-utils");
const { InputView } = require("./InputView");

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.runBridgeGame();
  }

  runBridgeGame() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
