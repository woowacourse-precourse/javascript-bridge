const { printStartingMessage } = require("./OutputView");
const { readBridgeSize } = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    printStartingMessage();
    readBridgeSize(this);
  }

  terminate() {
    Console.close();
  }
}

module.exports = App;
