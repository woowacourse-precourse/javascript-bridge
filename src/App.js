const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const { OUTPUT } = require("./constants/messages");

class App {
  play() {
    this.printStart();
    InputView.readBridgeSize();
  }

  printStart() {
    Console.print(`${OUTPUT.START}${OUTPUT.LINE}`);
  }
}

module.exports = App;
