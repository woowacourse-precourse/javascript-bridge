const BridgeGameController = require('./BridgeGameController.js');

class App {
  constructor() {
    this.bridgeGameController = new BridgeGameController();
  }
  play() {
    const bridgeGame = new BridgeGame();
  }
}

const app = new App();
app.play();

module.exports = App;
