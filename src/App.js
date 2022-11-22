const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.gameManager = new BridgeGame();
  }
  play() {
    this.gameManager.start();
  }
}

module.exports = App;

const app = new App();
app.play();
