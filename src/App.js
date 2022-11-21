const { Bridge } = require('./models');
const { BridgeGame } = require('./controllers');
const { BridgeView } = require('./views');

class App {
  #game;

  constructor() {
    this.#game = new BridgeGame(new Bridge(), new BridgeView());
  }

  play() {
    this.#game.start();
  }
}

module.exports = App;

const app = new App();
app.play();
