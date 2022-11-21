const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
console.log(InputView);

class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
    InputView.readBridgeSize();
    //BridgeMaker.makeBridge(InputView.readBridgeSize(), generateRandomNumber);
    

  }
}

module.exports = App;
