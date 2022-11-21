const BridgeGameManager = require("./BridgeGameManager");
const bridgeGameManager = new BridgeGameManager();

class App {
  play() {
    bridgeGameManager.game();
  }
}

const app = new App();
app.play();

module.exports = App;
