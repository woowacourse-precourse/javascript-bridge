const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const Game = new BridgeGame();
    Game.start();
  }
}

module.exports = App;
