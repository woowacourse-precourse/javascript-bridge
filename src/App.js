const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');

class App {
  play() {
    OutputView.gameStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
