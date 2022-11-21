const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");
class App {
  play() {
    OutputView.printStart();
    MissionUtils.Console.print(InputView.readBridgeSize());
  }
}

module.exports = App;
