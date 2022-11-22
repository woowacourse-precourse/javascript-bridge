const InputView = require("./InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {
  play() {
    Console.print('다리 건너기 게임을 시작합니다.');
    InputView.readBridgeSize();
  }
}

module.exports = App;
