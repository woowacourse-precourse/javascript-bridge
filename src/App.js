const { PHASE } = require('./constant/Constant');
const Controller = require('./controller/Controller');
const OutputView = require('./view/OutputView');

class App {
  #controller = new Controller();

  play() {
    OutputView.gameStart();
    this.#controller.goTo(PHASE.START);
  }
}
new App().play();

module.exports = App;
