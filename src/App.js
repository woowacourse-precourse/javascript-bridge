const BridgeGameController = require('./BridgeGameController');

class App {
  play() {
    new BridgeGameController().inputBridgeSize();
  }
}

module.exports = App;
const app = new App();
app.play();
