const Controller = require('./controller/Controller');

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  play() {
    this.#controller.execute();
  }
}

module.exports = App;
