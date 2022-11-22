const BridgeController = require("./BridgeController");

class App {
  play() {
    new BridgeController().play();
  }
}

const app = new App();
app.play();

module.exports = App;
