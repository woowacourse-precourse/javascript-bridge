const Game = require('./BridgeGame');

class App {
  play() {
    const game = new Game();
    game.start();
  }
}

module.exports = App;
