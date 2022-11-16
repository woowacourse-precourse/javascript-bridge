const InputView = require('./InputView');

class App {
  play() {
    // InputView.readBridgeSize();
    InputView.readMoving();
  }
}

const app = new App();
app.play();

module.exports = App;
