const inputView = require('./InputView');

class App {
  play() {
    inputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
