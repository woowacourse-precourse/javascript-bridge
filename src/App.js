const BridgeGameController = require('./controller/BridgeGameController');

class App {
  play() {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.start();
  }
}

module.exports = App;
