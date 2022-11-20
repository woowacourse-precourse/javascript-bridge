const BridgeGame2 = require("./model/BridgeGame");

class App {
  play() {
    const bridgeGame2 = new BridgeGame2();
    bridgeGame2.play();
  }
}

module.exports = App;
