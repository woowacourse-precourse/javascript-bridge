const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const game = new BridgeGame();
  }
}

const app = new App();
app.play();

module.exports = App;
