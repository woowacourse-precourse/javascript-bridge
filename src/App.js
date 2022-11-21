const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
class App {
  play() {
    MissionUtils.Console.print(InputView.readBridgeSize());
  }
}

module.exports = App;
