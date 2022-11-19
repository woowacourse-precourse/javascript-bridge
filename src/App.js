const BridgeGame = require('./controller/BridgeGame');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.start();
  }
}

module.exports = App;
