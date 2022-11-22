const BridgeController = require('./Controller/BridgeController');

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.requestBridgeSizeToView();
  }
}

const app = new App();
app.play();
module.exports = App;
