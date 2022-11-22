const BridgeGameController = require('./BridgeGameController');

class App {
  constructor() {
    this.bridgeGameController = new BridgeGameController();
  }

  play() {
    this.bridgeGameController.start();
  }
}

module.exports = App;
