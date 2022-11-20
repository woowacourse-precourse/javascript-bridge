const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("./constants/message");
const InputView = require("./InputView");

class App {
  play() {
    this.printGameStart();
    InputView.readBridgeSize();
  }
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.START);
  }
}

module.exports = App;
