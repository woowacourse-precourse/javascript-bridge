const InputView = require("../src/InputView");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    InputView.readBridgeSize();
  }
}
module.exports = App;
