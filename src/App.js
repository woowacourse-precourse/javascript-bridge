const BridgeGameController = require('./BridgeGameController');

class App {
  constructor() {
    const bridgeGameController = new BridgeGameController();
  }

  play() {
    this.bridgeGameController.start();
  }
}

module.exports = App;
