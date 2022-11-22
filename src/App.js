const BridgeGameController = require("./controller/BridgeGameController");
const { Console } = require("@woowacourse/mission-utils");

class App {
  START_MESSAGE = "다리 건너기 게임을 시작합니다.";

  play() {
    Console.print(this.START_MESSAGE);
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.getBridgeSize();
  }
}

module.exports = App;
