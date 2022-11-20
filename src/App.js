const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const game = new BridgeGame();
    game.start();
  }
}

module.exports = App;
