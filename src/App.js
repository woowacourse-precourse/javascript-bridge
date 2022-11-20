const BridgeGameController = require("./BridgeGameController");

class App {
  play() {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
