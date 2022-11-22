const InputView = require('./InputView');

class App {
  constructor() {
    this.inputView = InputView;
  }
  play() {
    this.inputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;