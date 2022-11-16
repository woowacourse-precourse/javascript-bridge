const InputView = require('./InputView');

class App {
  play() {
    // InputView.readBridgeSize();
    InputView.readGameCommand();
  }
}

const app = new App();
app.play();

module.exports = App;
