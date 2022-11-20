const BridgeGame = require('./BridgeGame');

class App {
  #bridgeGame;
  constructor () {
    this.#bridgeGame = new BridgeGame();
  }
  play () {
    this.#bridgeGame.maker();
  }
}

const app = new App();
app.play();

module.exports = App;
