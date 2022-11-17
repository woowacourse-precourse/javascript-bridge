const { Console } = require("@woowacourse/mission-utils");
const { readBridgeSize } = require("./InputView");

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.");
    readBridgeSize();
  }
}

module.exports = App;
