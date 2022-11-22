const InputView = require('./InputView');

class App {
  constructor() {}

  play() {
    InputView.readBridgeSize();
  }
}

module.exports = App;
