const { MissionUtils } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");

class App {
  bridge;

  print(message) {
    MissionUtils.Console.print(message);
    MissionUtils.Console.close();
  }

  play() {
    this.print(`다리 건너기 게임을 시작합니다.`);
    InputView.readBridgeSize((bridgeLength) => {
      this.bridge = new BridgeGame(bridgeLength);
    });
  }
}

module.exports = App;
