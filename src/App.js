const OutputView = require('./view/OutputView.js');
const InputView = require('./view/InputView.js');

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
