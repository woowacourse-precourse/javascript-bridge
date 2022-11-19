const BridgeGame = require('./controller/BridgeGame');

class App {
  play() {
    const bridgeGameManager = new BridgeGame();
    bridgeGameManager.execute();
  }
}

module.exports = App;
