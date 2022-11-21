const BridgeGameManager = require("./BridgeGameManager");
const bridgeGameManager = new BridgeGameManager();

class App {
  play() {
    bridgeGameManager.game();
  }
}

module.exports = App;
