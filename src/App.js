const { PHASE } = require('./constant/Constant');
const Controller = require('./controller/Controller');

class App {
  #controller = new Controller();

  play() {
    this.#controller.goTo(PHASE.START);
  }
}

module.exports = App;
