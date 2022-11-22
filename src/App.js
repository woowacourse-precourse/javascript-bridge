const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");

class App {
  #tryCount;
  constructor() {
    this.#tryCount = 1;
  }
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize();
  }
}

module.exports = App;
const app = new App();
app.play();
