const Model = require('./Model');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Controller {
  constructor() {
    this.model = new Model();
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  startGame() {
    this.outputView.printGameStart();
  }
}
module.exports = Controller;
