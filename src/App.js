const inputView = require("./InputView");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    this.bridgeGame.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
