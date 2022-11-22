const InputView = require('./ui/InputView');
const OutputView = require('./ui/OutputView');

class App {
  play() {
    OutputView.start();
    InputView.readBridgeSize();
  }
}

module.exports = App;

// const app = new App();
// app.play();
