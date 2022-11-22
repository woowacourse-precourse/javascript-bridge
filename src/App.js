const InputView = require("./InputView");
const MU = require("@woowacourse/mission-utils");
class App {
  play() {
    MU.Console.print('다리 건너기 게임을 시작합니다.\n');
    InputView.readBridgeSize();
  }
}
module.exports = App;
