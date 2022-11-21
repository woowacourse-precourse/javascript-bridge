const InputView = require('./InputView');

class App {
  play() {
    const bridgeSize = InputView.readBridgeSize();
  }
}

const app = new App;
app.play();
module.exports = App;
