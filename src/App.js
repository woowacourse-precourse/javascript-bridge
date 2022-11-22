const CrossBridgeGame = require('./CrossBridgeGame');

class App {
  constructor() {
    this.crossBridgeGame = new CrossBridgeGame();
  }

  play() {
    this.crossBridgeGame.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
