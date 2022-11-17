const BridgeGame = require("./BridgeGame");
const { readBridgeSize } = require("./InputView");
const { printStart } = require("./OutputView");

class App {
  play() {
    printStart();
    readBridgeSize();
  }
}

new App().play();
module.exports = App;
