const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const { checkValidBridgeLength } = require("./CheckException");
const { readBridgeSize } = require("./InputView");
const InputView = require("./InputView");

class App {
  bridge;

  print(message) {
    MissionUtils.Console.print(message);
    MissionUtils.Console.close();
  }

  play() {
    this.print(`다리 건너기 게임을 시작합니다. \n`);

    readBridgeSize((bridgeLength) => {
      try {
        checkValidBridgeLength(parseInt(bridgeLength));
        this.bridge = new BridgeGame(bridgeLength);
      } catch (err) {
        this.print(err);
      }
    });
  }
}

module.exports = App;
