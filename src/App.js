const BridgeGameController = require("./controller/BridgeGameController");

class App {
  play() {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.getBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
