const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const GAME = new BridgeGame();
    GAME.start();
  }
}

const app = new App();
app.play();

module.exports = App;
