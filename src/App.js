const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.gameStart();
  }
}

module.exports = App;
