const BridgeGame = require("./BridgeGame");

const gameStart = new BridgeGame();

class App {
  play() {
    gameStart.move();
  }
}

const app = new App();
app.play();

module.exports = App;
