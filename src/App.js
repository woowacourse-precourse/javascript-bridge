const BridgeGameController = require('./BridgeGameController');
const BridgeGameModel = require('./BridgeGameModel');
const BridgeGame = require('./BridgeGame');

const bridgeGameModel = new BridgeGameModel();
const bridgeGameController = new BridgeGameController(bridgeGameModel);

class App {
  startBridgeGame() {
    const bridgeGame = new BridgeGame(bridgeGameModel, bridgeGameController);
    bridgeGame.start();
  }

  play() {
    bridgeGameController.initialize();
    bridgeGameController.readUserBridgeSize(this.startBridgeGame);
  }
}

// FIXME: remove this instance
const app = new App();
app.play();

module.exports = App;
