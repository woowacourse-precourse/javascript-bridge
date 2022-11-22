const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    OutputView.printStartMessage();
  }

  play() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
