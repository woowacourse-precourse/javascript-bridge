const BridgeGame = require("./BridgeGame");

class App {
  play() {
    bridgeGame.play();
  }
}

const bridgeGame = new BridgeGame();
const app = new App();
app.play();

module.exports = App;
