const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #outputView = OutputView;
  #inputView = InputView;

  play() {
    this.#outputView.printStart();
    this.#inputView.readBridgeSize();
  }
}

new App().play();
module.exports = App;
