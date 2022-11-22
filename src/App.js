const BridgeGameProceed = require('./BridgeGameProceed');

class App {

  constructor() {
    this.bridgeGameProceed = new BridgeGameProceed();
  }

  play() {
    this.bridgeGameProceed.start();
  }
}

const app = new App();
app.play();

module.exports = App;
