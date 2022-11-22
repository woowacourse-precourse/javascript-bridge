const InputView = require('./InputView');
const OutputView = require('./OutputView');


class App {
  constructor() {
    this.OutputView = OutputView;
    this.inputView = InputView;
  }
  play() {
    this.OutputView.printStartMessage();
    this.inputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;