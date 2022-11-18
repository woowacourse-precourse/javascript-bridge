const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.init(5);
  }
}

module.exports = App;
