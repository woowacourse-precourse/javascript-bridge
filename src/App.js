const Controller = require('./Controller');

class App {
  #controller = new Controller();

  play() {
    this.#controller.run();
  }
}

module.exports = App;
