const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.bridgeGameStart();
  }

  bridgeGameStart() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  }
}

module.exports = App;
