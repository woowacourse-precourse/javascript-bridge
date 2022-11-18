const BridgeGameController = require('./BridgeGameController.js');

class App {
  constructor() {
    this.bridgeGameController = new BridgeGameController();
  }
  play() {
    this.bridgeGameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
