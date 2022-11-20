const BridgeGamePlay = require('./BridgeGamePlay');

class App {
  play() {
    const game = new BridgeGamePlay();
    game.start();
  }
}

module.exports = App;
