const BrideGameController = require("./controller/BridgeGameController");

class App {
  play() {
    new BrideGameController().start();
  }
}

module.exports = App;
