const OutputView = require('./OutputView.js');
const InputView = require('./InputView.js');

class App {
  play() {
    OutputView.gameStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
