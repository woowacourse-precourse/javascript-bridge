const BridgeGame = require("./BridgeGame");
const BridgeGameController = require("./BridgeGameController");
class App {
  play() {
    new BridgeGameController(new BridgeGame()).gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
