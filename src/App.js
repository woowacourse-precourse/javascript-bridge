const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.BridgeGame = new BridgeGame();
  }

  play() {
    this.BridgeGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
