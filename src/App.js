const BridgeGame = require('./controller/BridgeGame');

class App {
  constructor() {
    this.game = new BridgeGame();
  }

  play() {
    this.game.play();
  }
}

module.exports = App;
