const BridgeController = require('./Controller/BridgeController');

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.getBridgeSizeRequest();
  }
}

const app = new App();
app.play();
module.exports = App;
