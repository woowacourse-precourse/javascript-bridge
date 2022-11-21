const Controller = require('./Controller');

class App {
  #controller = new Controller();

  play() {
    this.#controller.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
