const BridgeGameManager = require("./BridgeGameManager");

class App {
  #bridgeGameManager;

  constructor() {
    this.#bridgeGameManager = new BridgeGameManager();
  }

  play() {
    this.#bridgeGameManager.game();
  }
}

const app = new App();
app.play();

module.exports = App;
