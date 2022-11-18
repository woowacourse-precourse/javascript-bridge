const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;

const app = new App();
app.play();
