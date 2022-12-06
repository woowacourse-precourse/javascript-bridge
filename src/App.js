const Controller = require('../src/controller/Controller');

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  play() {
    this.#controller.start();
  }
}

module.exports = App;
