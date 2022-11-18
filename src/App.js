const BridgeGame = require('./BridgeGame');

class App {
  #bridgeGame = new BridgeGame();

  play() {
    this.#bridgeGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
