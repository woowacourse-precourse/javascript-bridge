const BridgeController = require("./BridgeController");

const bridgeController = new BridgeController();

class App {
  play() {
    bridgeController.gameStart();
  }
}

module.exports = App;
