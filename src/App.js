const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.init();
  }
}

module.exports = App;
