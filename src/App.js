const BridgeGame = require('./BridgeGame');

class App {
  constructor () {
    this.bridgeGame = new BridgeGame();
  }
  play () {
    this.bridgeGame.maker();
  }
}

const app = new App();
app.play();

module.exports = App;
