const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_START } = require('./constant/outputMessage');
const InputView = require('./InputView');

class App {
  play() {
    MissionUtils.Console.print(BRIDGE_START);
    InputView.readBridgeSize();
  }
}

module.exports = App;
