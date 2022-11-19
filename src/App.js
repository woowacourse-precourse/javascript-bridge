const BridgeGame = require('./BridgeGame');
class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
