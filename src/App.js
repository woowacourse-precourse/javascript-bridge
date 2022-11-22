const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.startGame();
  }
}

module.exports = App;
