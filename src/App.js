const BridgeGame = require("./BridgeGame");
const game = new BridgeGame();
class App {
  play() {
    game.play();
  }
}
const app = new App();
app.play();

module.exports = App;
