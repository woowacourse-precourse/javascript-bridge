const BridgeGame = require('./controller/BridgeGame');

class App {
  play() {
    new BridgeGame().startGame();
  }
}

module.exports = App;
