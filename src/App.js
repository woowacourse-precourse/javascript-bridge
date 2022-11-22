const BridgeController = require("../src/Controller/BridgeController");

const bridgeController = new BridgeController();

class App {
  play() {
    bridgeController.gameStart();
  }
}

module.exports = App;
