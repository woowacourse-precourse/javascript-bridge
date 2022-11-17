const BridgeGame = require("./BridgeGame");

class App {
  play() {
    BridgeMaker.makeBridge(
      InputView.readBridgeSize(),
      BridgeRandomNumberGenerator.generate
    );
  }
}

new App().play();
module.exports = App;
