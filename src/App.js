const BridgeGameController = require('./domain/BridgeGameController');

class App {
  play() {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
