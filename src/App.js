const { BridgeGame } = require('./models');
const { BridgeGameController } = require('./controllers');
const { BridgeGameView } = require('./views');

class App {
  #game;

  constructor() {
    this.#game = new BridgeGameController(
      new BridgeGame(),
      new BridgeGameView(),
    );
  }

  play() {
    this.#game.start();
  }
}

module.exports = App;

const app = new App();
app.play();
