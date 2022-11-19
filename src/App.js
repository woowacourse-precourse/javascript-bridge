const BridgeGame = require("./BridgeGame");
const BridgeGameController = require("./BridgeGameController");
class App {
  play() {
    const controller = new BridgeGameController(new BridgeGame());
    controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
