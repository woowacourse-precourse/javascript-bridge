const BridgeGame = require('./Controller/BridgeGame');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.startGame();
  }
}

module.exports = App;
