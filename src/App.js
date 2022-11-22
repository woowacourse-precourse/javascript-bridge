const InputView = require('./InputView');

class App {
  play() {
    InputView.readGameStart();
    InputView.readBridgeSize();
  }
}

const app = new App();

app.play();

module.exports = App;
