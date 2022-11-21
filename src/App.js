const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.start();
  }
}

module.exports = App;
