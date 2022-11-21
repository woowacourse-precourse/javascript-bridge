const { printStart } = require("./OutputView");
const { readBridgeSize } = require("./InputView");

class App {
  play() {
    printStart();
    readBridgeSize();
  }
}

module.exports = App;
