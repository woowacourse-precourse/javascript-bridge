const BridgeGameController = require('./domains/BridgeGameController');

class App {
  play() {
    BridgeGameController.start();
  }
}

module.exports = App;
