const BridgeGame = require('./BridgeGame');

class App {
  constructor () {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    BridgeGame.maker(this.bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
