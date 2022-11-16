const BridgeGameController = require('./controllers/BridgeGameController');

class App {
  #controller;

  constructor() {
    this.#controller = new BridgeGameController();
  }

  play() {
    this.#controller.play();
  }
}

module.exports = App;
