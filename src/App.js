const { printGameStart } = require("../src/OutputView");
const { readBridgeSize } = require("./InputView");
//const OutputView = require("../src/OutputView");

class App {
  play() {
    printGameStart();
    readBridgeSize();
  }
}

module.exports = App;
