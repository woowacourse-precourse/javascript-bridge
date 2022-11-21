const BridgeGameController = require("./Controller/BridgeGameController");
class App {
  play() {
    const controller = new BridgeGameController();
    controller.start();
  }
}

module.exports = App;
