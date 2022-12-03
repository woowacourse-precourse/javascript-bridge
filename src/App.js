const BridgeInteractPlayer = require("./Bridge.Domain/BridgeInteractPlayer");

class App {
  #bridgeGame;
  constructor() {
    this.#bridgeGame = new BridgeInteractPlayer();
  }

  play() {
    this.#bridgeGame.playerInputBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
