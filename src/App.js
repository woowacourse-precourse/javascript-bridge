const InputView = require('./InputView');

class App {
  play() {
    InputView.readBridgeSize();
  }
}

const test = new App();
test.play();

module.exports = App;
