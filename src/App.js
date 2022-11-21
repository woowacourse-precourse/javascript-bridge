const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const bridegame = new BridgeGame();
    bridegame.start();
  }
}

module.exports = App;
