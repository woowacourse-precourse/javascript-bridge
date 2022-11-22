const BridgeGame = require("./BridgeGame");
const BridgeGameController = require("./BridgeGameController");

class App {
  play() {
    const game = new BridgeGame();
    const controller = new BridgeGameController();
    controller.start(game);
  }
}

const app = new App();
app.play();

module.exports = App;
