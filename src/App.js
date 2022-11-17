const BridgeGame = require("./BridgeGame");
const { readBridgeSize } = require("./InputView");

class App {
  play() {
    readBridgeSize();
  }
}

new App().play();
module.exports = App;
