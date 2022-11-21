const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
    var size = InputView.readBridgeSize();
    var command = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    //MissionUtils.Console.print(command);

  }
}

module.exports = App;
