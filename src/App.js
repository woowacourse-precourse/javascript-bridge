const BridgeController = require('./BridgeController');

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.run();
  }
}

module.exports = App;
