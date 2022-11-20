const BridgeGameController = require('./BridgeGameController');
const BridgeGameModel = require('./BridgeGameModel');

const bridgeGameModel = new BridgeGameModel();
const bridgeGameController = new BridgeGameController(bridgeGameModel);

class App {
  play() {
    bridgeGameController.setUserBridgeSize();
  }
}

// FIXME: remove this instance
const app = new App();
app.play();

module.exports = App;
