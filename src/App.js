const BridgeGame = require("./BridgeGame");
const GameManager = require("./GameManager");

class App {

  play() {
    this.gameManager = new GameManager();
    this.bridgeGame = new BridgeGame();
    this.gameManager.printStart();
    this.bridgeGame.start();
  }
}

module.exports = App;
