const Controller = require('./Controller');

class App {
  constructor() {

  }

  play() {
    const controller = new Controller();
    controller.init();
    // const game = new Game(this.#bridge);
    // game.start();
  }
}

module.exports = App;
