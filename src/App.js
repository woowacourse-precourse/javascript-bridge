const MainBridgeController = require("./controller/MainBridgeController");

class App {
  play() {
    new MainBridgeController().init();
  }
}

module.exports = App;
