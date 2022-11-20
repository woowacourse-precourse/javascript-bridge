const BridgeGameController = require('./Controller/BridgeGameController');

class App {
  play() {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
