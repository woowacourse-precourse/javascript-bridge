const BridgeGameController = require('./BridgeGameController');

class App {
  play() {
    new BridgeGameController();
  }
}

module.exports = App;
