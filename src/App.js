const Controller = require("./Controller/Controller");

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  Start() {
    this.#controller.gameStart();
  }

  play() {
    this.Start();
  }
}

module.exports = App;
