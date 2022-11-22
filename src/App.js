const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame.js");
const InputView = require("./InputView.js");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize(bridgeGame);
  }
}

module.exports = App;
