const Console = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame.js");
const InputView = require("./InputView");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    Console.print("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize(bridgeGame);
  }
}

module.exports = App;
