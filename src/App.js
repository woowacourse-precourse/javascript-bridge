const Controller = require('./Controller');

class App {
  #controller = new Controller();

  play() {
    this.#controller.start();
  }
}

module.exports = App;
