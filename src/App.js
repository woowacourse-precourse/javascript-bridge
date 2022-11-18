const { Console } = require("@woowacourse/mission-utils");

class App {
  printGameStart() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  }

  play() {
    this.printGameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
