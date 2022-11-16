const BridgeController = require('./BridgeController');

class App {
  constructor() {
    this.bridgeController = new BridgeController();
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
