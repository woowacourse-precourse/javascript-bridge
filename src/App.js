const BridgeGame = require("./model/BridgeGame");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.play();
  }
}
module.exports = App;
