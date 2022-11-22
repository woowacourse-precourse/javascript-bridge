const BridgeGameHandler = require('./BridgeGameHandler');

class App {
  play() {
    new BridgeGameHandler().startGame();
  }
}

module.exports = App;
