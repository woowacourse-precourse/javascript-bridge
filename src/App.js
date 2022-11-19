const BridgeController = require('./BridgeController');

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.getBridge();
  }
}

const app = new App();
app.play();
module.exports = App;
