const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.gameInit();
  }
}

module.exports = App;
