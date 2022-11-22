const BridgeGameController = require('./Controller/BridgeGameController');

class App {
  play() {
    new BridgeGameController();
  }
}

module.exports = App;
