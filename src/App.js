const BridgeGame = require('./BridgeGame');
const BridgeGameController = require('./BridgeGameController');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    BridgeGameController.run(bridgeGame);
  }
}

module.exports = App;
