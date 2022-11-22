const BridgeGame = require('./BridgeGame');

class App {
  #BridgeGame;

  constructor() {
    this.#BridgeGame = new BridgeGame();
  }

  play() {
    this.#BridgeGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
