const BridgeController = require('./Controller/BridgeController');

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.getBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
