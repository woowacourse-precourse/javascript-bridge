const BridgeGame = require("./model/BridgeGame");

class App {
  play() {
    const Game = new BridgeGame();
    Game.start();
  }
}

module.exports = App;
