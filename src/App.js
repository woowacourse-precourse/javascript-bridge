const InputView = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants");
class App {
  play() {
    Console.print(MESSAGE.START_MESSAGE);

    InputView.readBridgeSize();
  }
}
module.exports = App;
